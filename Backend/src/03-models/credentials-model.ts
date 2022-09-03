import Joi from "joi"

class CredentialsModel {
    username: string
    password: string

    constructor(credentials: CredentialsModel) {
        this.username = credentials.username
        this.password = credentials.password
    }

    private static postValidationSchema = Joi.object({
        username: Joi.string().required().min(2).max(100),
        password: Joi.string().required().min(2).max(100)
    })

    validatePost(): string {
        const result = CredentialsModel.postValidationSchema.validate(this, { abortEarly: false })
        return result.error?.message
    }
}

export default CredentialsModel