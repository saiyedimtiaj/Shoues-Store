import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Brands = () => {
  const { dark } = useContext(AuthContext);
  const [loader, setLoader] = useState();
  const category = useLoaderData();
  const navegate = useNavigate();

  const handleBrand = (_brand) => {
    const brandMatch = loader?.find((product) => product.brand === _brand);
    navegate(`/products/${brandMatch?.brand}`);
  };

  useEffect(() => {
    fetch("https://assingment-10-server-eta.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setLoader(data);
      });
  }, []);


  return (
    <div className="py-7 grid md:grid-cols-3 grid-cols-2 gap-5 items-center max-w-3xl mx-auto px-5">
      {category &&  category?.map((category) => (
        <div
          key={category.id}
          onClick={() => handleBrand(category?.name)}
          className={`${dark ? 'border-blue-800' : 'border-black'} flex justify-center md:w-60 cursor-pointer md:h-60 w-32 h-32 items-center relative border-2`}
        >
          <img className={`bg-gray-200 h-full w-full ${dark ? 'opacity-30' : 'opacity-70'}`} src={category.img} alt="" />
          <div className="absolute">
            <img
              className="w-20 md:w-32"
              src={dark ? category.dark : category.light}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
