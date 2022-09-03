import RoleEnum from "./RoleEnum"

class UserModel {
    
    userId: string  //uuid (to prevent IDOR attacks)
    firstName: string 
    lastName: string 
    username: string 
    password: string 
    roleId: RoleEnum  // enum either 1 for USER 2 for ADMIN

}

export default UserModel 