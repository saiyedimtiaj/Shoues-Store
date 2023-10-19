import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    // console.log(location);
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="text-center mx-auto my-10">
            <span className="loading loading-infinity loading-lg mx-auto"></span>
        </div>
    }
   if(user){
        return children
   }
   return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;