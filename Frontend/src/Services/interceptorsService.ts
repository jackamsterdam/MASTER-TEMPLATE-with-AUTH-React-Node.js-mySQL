import axios from "axios"
import store from "../Redux/Store"

class InterceptorsService {

  createIntereceptors():void {
      axios.interceptors.request.use(request => {
          if (store.getState().authState.token) {
      
              request.headers = {
                  authorization: `Bearer ${store.getState().authState.token}`
              }
          }
          return request
      })
  }
}


const interceptorsService = new InterceptorsService()
export default interceptorsService