import UserModel from "../Models/UserModel"
import axios from 'axios'
import config from "../Utils/Config"
import CredentialsModel from "../Models/CredentialsModel"
import store from "../Redux/Store"
import { loginAction, logoutAction, registerAction } from "../Redux/AuthState"

class AuthService {
  
    async register(user: UserModel):Promise<void> {
        const response = await axios.post<string>(config.registerUrl, user)
        const token = response.data 
        store.dispatch(registerAction(token))
    
    }

    async login(credentials: CredentialsModel):Promise<void> {
        const response = await axios.post<string>(config.loginUrl, credentials)
        const token = response.data 
      store.dispatch(loginAction(token))
 
    }

    logout():void {
        store.dispatch(logoutAction())
    }
}

const authService = new AuthService()

export default authService