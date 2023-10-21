import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  const { dark, setDark } = useContext(AuthContext);
  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <button
        onClick={() => setDark(!dark)}
        className={`${
          dark
            ? "bg-black border-blue-500 text-white"
            : "text-black  border-blue-950 bg-white"
        } border-2 p-2 z-40 shadow-xl fixed right-3 top-1/2`}
      >
        {dark ? <FiSun /> : <FiMoon />}
      </button>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
