import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Users from "./Users";
import useAuth from '../hooks/useAuth'
import useAxiosMethods from "../hooks/useAxiosMethods";
import useRefreshToken from "../hooks/useRefreshToken";
import { useEffect } from "react";

const Home = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const {post} = useAxiosMethods();

    const refresh = useRefreshToken();
    useEffect(()=>{
        console.log("home.js useeffect ran");
    },[])

    const logout = async () => {
        try{
            post('auth/logout', null, setAuth);
            navigate('/');
            console.log('logouted!!!');

        }catch(err){
            console.error(err);
        }
        
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />

            <Users />
           
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>

            <button onClick={() => refresh()}>Refresh</button>
        </section>
    )
}

export default Home