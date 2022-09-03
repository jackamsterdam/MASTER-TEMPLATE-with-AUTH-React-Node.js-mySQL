import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

  const [user, setUser] = useState<UserModel>(null)
  console.log("user in Auth menu", user);  //!erase this

  useEffect(() => {

    setUser(store.getState().authState.user)

    const unsubscribe = store.subscribe(() => {
      setUser(store.getState().authState.user)
    })

    return () => unsubscribe()

  }, [])


  return (
    <div className="AuthMenu">

      {user === null ?
        <>
          <span>Hello Guest</span>
        </>
        :
        <>
          <span>Hello {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}</span>
          <span> | </span>

          <NavLink to="/logout">Logout</NavLink>

        </>
      }
    </div>
  );
}

export default AuthMenu;
