import { useContext } from "react";
import './header.css'
import { AuthContext } from "../../Context/AuthProvider";


const Header = () => {
    const {dark} = useContext(AuthContext);

    return (
        <div className={dark ? 'bg-[#27223e]' : 'bg-[#EEEDEB]' }>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-[calc(100vh-80px)] py-12 container mx-auto px-5 ">
        <div className="p-5">
             <h1 className="text-5xl font-bold">LIMITED EDITION <br /> SPORTSWARE</h1>
             <p className="text-lg mt-3 font-medium">The best walking sneakers.</p>
        </div>
        <div className="px-4">
             <img className="lg:h-96 w-full transition-all animate" src="../assets/H6-rev-img-02.png" alt="" />
        </div>
     </div>
        </div>
    );
};

export default Header;