import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import Header from "../../Component/Header/Header";

const Home = () => {
  const { dark, setDark } = useContext(AuthContext);
  console.log(dark);
  return (
    <div className={`${dark ? "bg-black " : "text-black"}`}>
      <button
        onClick={() => setDark(!dark)}
        className={`${dark ? 'bg-black border-blue-500 text-white' : 'text-black  border-blue-950 bg-white'} border-2 p-2 z-40 shadow-xl fixed right-3 top-1/2`}
      >
        {dark ? <FiSun/> : <FiMoon/>}
      </button>
      <Header/>
    </div>
  );
};

export default Home;
