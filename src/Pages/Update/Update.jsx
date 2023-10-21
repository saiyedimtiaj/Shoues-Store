import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const Update = () => {
    const loader = useLoaderData();
    console.log(loader);
    const {dark} = useContext(AuthContext)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const update = {name,image,brand,type,price,description,rating}

        fetch(`https://assingment-10-server-eta.vercel.app/products/${loader.brand}/${loader._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
              toast.success('Product updated Sucessfully')
            }
        })
        .catch(err=>{
          return toast.error(err.message);
        })
    }

    return (
        <div className="pb-14">
          <Toaster position="top-center" reverseOrder={false} />
        <h1 className="text-center text-4xl font-bold mt-8 mb-5">Update Product</h1>
        <form onSubmit={handleUpdate}
          className="flex flex-col justify-center mx-auto max-w-lg px-5"
        >
          <input
          type="text"
          name="name"
          required
          defaultValue={loader.name}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 border-black px-3 py-2 focus:outline-none`}
        />
        <input
          type="url"
          name="image"
          required
          defaultValue={loader.image}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
        />
        <select
          name="brand"
          id="cars"
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
          required
          defaultValue={loader.brand}
        >
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
          <option value="zara">Zara</option>
          <option value="gucci">Gucci</option>
          <option value="fila">fila</option>
        </select>
        <input
          type="text"
          name="type"
          required
          defaultValue={loader.type}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
        />
        <input
          type="number"
          required
          name="price"
          defaultValue={loader.price}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
        />
        <input
          type="text"
          required
          name="description"
          defaultValue={loader.description}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
        />
        <input
          type="number"
          name="rating"
          required
          defaultValue={loader.rating}
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
        />
          <input
            type="submit"
            value="Update Product"
            className="bg-blue-600 text-white font-semibold mt-3 rounded-md cursor-pointer py-2"
          />
        </form>
      </div>
    );
};

export default Update;