import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const MainLayout = () => {
    const {dark} = useContext(AuthContext);
    return (
        <div className={dark ? 'bg-black text-white':'bg-white text-black'}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;