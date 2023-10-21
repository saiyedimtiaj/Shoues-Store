import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Header from "../../Component/Header/Header";
import Brands from "../../Component/Brands/Brands";
import Badze from "../../Component/Badze/Badze";
import Highlight from "../../Component/Highlight/Highlight";

const Home = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div className={`${dark ? "bg-black " : "text-black"}`}>
     
      <Header/>
      <Brands/>
      <Badze/>
      <Highlight/>
    </div>
  );
};

export default Home;
