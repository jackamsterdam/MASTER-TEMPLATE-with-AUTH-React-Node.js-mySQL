import { OkPacket } from "mysql";
import dal from "../04-dal/dal";
import ErrorModel from "../03-models/error-model";
import UserModel from "../03-models/user-model";
import { v4 as uuid } from 'uuid'
import cyber from "../01-utils/cyber";
import RoleEnum from "../03-models/role-enum";
import CredentialsModel from "../03-models/credentials-model";


async function register(user: UserModel): Promise<string> {

  //Validation
  const errors = user.validatePost()
  if (errors) throw new ErrorModel(400, errors)

  const isTaken = await isUsernameTaken(user.username)
  if (isTaken) throw new ErrorModel(400, `Username ${user.username} is already taken. Please choose a different username.`)

  user.userId = uuid() //Prevent IDOR attacks
  user.roleId = RoleEnum.USER

  //hash and salt password
  user.password = cyber.hash(user.password)

  const sql = `INSERT INTO users VALUES(?,?,?,?,?,?)` //Prevent sql injection

  const info: OkPacket = await dal.execute(sql, [user.userId, user.roleId, user.firstName, user.lastName, user.username, user.password])

  delete user.password

  const token = cyber.getNewToken(user)

  return token
}

async function login(credentials: CredentialsModel): Promise<string> {
  // Validation 
  const errors = credentials.validatePost()
  if (errors) throw new ErrorModel(400, errors)

  // Hash and salt password before comparing in query 
  credentials.password = cyber.hash(credentials.password)

  const sql = `SELECT *
                FROM users 
                WHERE username = ? AND password = ?`

  const users = await dal.execute(sql, [credentials.username, credentials.password])

  if (users.length === 0) throw new ErrorModel(401, `Incorrect username or password`)

  const user = users[0]

  delete user.password

  const token = cyber.getNewToken(user)

  return token
}

async function isUsernameTaken(username: string): Promise<boolean> {
  const sql = `SELECT COUNT(*) as count
                 FROM users
                 WHERE username = ?`

  const table = await dal.execute(sql, [username])
  const row = table[0]
  const count = row.count
  return count > 0

}

export default {
  register,
  login
}