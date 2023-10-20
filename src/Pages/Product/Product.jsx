import { Box, Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Product = () => {
  const product = useLoaderData();
  const {dark,user} = useContext(AuthContext);
  const [cartItem,setCartItem] = useState([])


  useEffect(()=>{
    fetch(`https://assingment-10-server-eta.vercel.app/cart/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  },[user.email])

  
  const handleAddtocart = () => {
    const email = user.email
    const name = product.name;
    const image = product.image;
    const price = product.price
    const cartItem = {name,image,email,price};

    fetch(`https://assingment-10-server-eta.vercel.app/cart/${user.email}`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(cartItem)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      toast.success('add to cart sucessfully')
    })
    
  }

  return (
    <div className="max-w-5xl mx-auto px-5 flex flex-col gap-8 lg:flex-row">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1">
        <img src={product.image} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-lg font-semibold text-gray-500 mb-2">{product?.type}</p>
        <p className="text-2xl font-semibold">{product?.name}</p>
        <p className="font-medium mt-3">{product?.description}</p>
        <div className="my-3">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating name="read-only" value={parseInt(product?.rating)} readOnly />
          </Box>
        </div>
        <h2 className="text-xl font-bold">$ {product?.price}</h2>
        <div>
          <button onClick={handleAddtocart} className={`px-6 py-2 ${dark ? 'bg-white text-black' : 'bg-black text-white'} rounded-sm font-medium mt-3 mb-5`}>
            Add To Cart
          </button>
          <Link to={`/update/${product._id}`}>
          <button className="px-6 ml-3 py-2 bg-blue-600 text-white rounded-sm font-medium mt-3 mb-5">
            Update
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
