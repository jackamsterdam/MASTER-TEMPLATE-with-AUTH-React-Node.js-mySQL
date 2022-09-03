import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import "./Home.css";

function Home(): JSX.Element {

    const navigate = useNavigate()

    console.log("store.getState().authState.token", store.getState().authState.token);  //! delete this!
    useEffect(() => {
        if (!store.getState().authState.token) {
            navigate('/login')
        }
    }, [])



    return (
        <div className="Home">
            <h1>WELCOME TO ...</h1>
        </div>
    );
}

export default Home;
