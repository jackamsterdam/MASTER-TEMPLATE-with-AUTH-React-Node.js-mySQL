import Joi from "joi"
import RoleEnum from "./role-enum"

class UserModel {
    userId: string  //uuid (to prevent IDOR attacks)
    firstName: string
    lastName: string
    username: string
    password: string
    roleId: RoleEnum  // enum either 1 for USER 2 for ADMIN

    constructor(user: UserModel) {
        this.userId = user.userId
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.username = user.username
        this.password = user.password
        this.roleId = user.roleId
    }

    private static postValidationSchema = Joi.object({ //400 errors
        userId: Joi.forbidden(),
        firstName: Joi.string().required().min(2).max(100),
        lastName: Joi.string().required().min(2).max(100),
        username: Joi.string().required().min(2).max(100),
        password: Joi.string().required().min(2).max(100),
        roleId: Joi.number().optional().integer().min(RoleEnum.USER).max(RoleEnum.ADMIN)
    })

    validatePost(): string {
        const result = UserModel.postValidationSchema.validate(this, { abortEarly: false })
        return result.error?.message
    }
}

export default UserModel 