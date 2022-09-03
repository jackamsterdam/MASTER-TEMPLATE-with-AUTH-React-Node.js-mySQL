import UserModel from "../Models/UserModel"
import jwtDecode from 'jwt-decode'

export class AuthState {
    token: string = null
    user: UserModel = null 

    constructor() {
        this.token = localStorage.getItem('token')
        if (this.token) {
            const payload:any = jwtDecode(this.token)
            this.user = payload.user
           
        }
    }
}

export enum AuthActionType {
    Register = 'Register',
    Login = 'Login',
    Logout = 'Logout'
}

export interface AuthAction {
   type: AuthActionType,
   payload?: string
}

export function registerAction(token: string):AuthAction {
    return {type: AuthActionType.Register, payload: token}
}

export function loginAction(token: string): AuthAction {
    return {type: AuthActionType.Login, payload: token}
}

export function logoutAction():AuthAction {
    return {type: AuthActionType.Logout}
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
  const newState = {...currentState}

  switch(action.type) {
      case AuthActionType.Register:
      case AuthActionType.Login:
          newState.token = action.payload
          const payload: any = jwtDecode(newState.token)
          newState.user = payload.user
          localStorage.setItem('token', newState.token)
       break;
      case AuthActionType.Logout:
      newState.token = null 
      newState.user = null 
      localStorage.removeItem('token')
  }

  return newState

  
}
