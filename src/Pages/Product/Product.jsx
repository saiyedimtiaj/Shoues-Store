import { Box, Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="max-w-5xl mx-auto px-5 flex flex-col gap-8 lg:flex-row">
      <div className="flex-1">
        <img src={product.image} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-2xl font-semibold">{product?.name}</p>
        <p className="font-medium mt-3">{product?.description}</p>
        <div className="my-3">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating name="read-only" value={product?.rating} readOnly />
          </Box>
        </div>
        <h2 className="text-xl font-bold">$ {product?.price}</h2>
        <div>
          <button className="px-6 py-2 bg-black text-white rounded-sm font-medium mt-3 mb-5">
            Add To Cart
          </button>
          <button className="px-6 ml-3 py-2 bg-blue-600 text-white rounded-sm font-medium mt-3 mb-5">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
