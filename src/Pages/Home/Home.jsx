import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FiMoon, FiSun } from "react-icons/fi";

const Home = () => {
  const { dark, setDark } = useContext(AuthContext);
  console.log(dark);
  return (
    <div className={`${dark ? "bg-black " : "text-black"}`}>
      <h1 className="text-4xl">Home</h1>
      <button
        onClick={() => setDark(!dark)}
        className={`${dark ? 'bg-black border-blue-500 text-white' : 'text-black  border-blue-950 bg-white'} border-2 p-2 shadow-xl fixed right-0 top-1/2`}
      >
        {dark ? <FiSun/> : <FiMoon/>}
      </button>
    </div>
  );
};

export default Home;
