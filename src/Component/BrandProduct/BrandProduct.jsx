import { Link } from "react-router-dom";

const BrandProduct = ({ products }) => {
  console.log(products);
  return (
    <div className="container mx-auto px-5 mt-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div key={product._id}>
            <img src={product?.image} alt="" />
            <p className="text-xl font-semibold my-2">{product?.name}</p>
            <div>
              <p className="font-bold">${product.price}</p>
            </div>
            <Link to={`/products/${product.brand}/${product._id}`}>
            <button className="px-4 py-1.5 bg-black text-white rounded-sm font-medium mt-3 mb-5">
              View Details
            </button>
            
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
