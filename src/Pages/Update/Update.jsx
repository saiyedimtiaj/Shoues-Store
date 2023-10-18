import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loader = useLoaderData();
    console.log(loader);

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

        fetch(`http://localhost:5000/products/${loader.brand}/${loader._id}`,{
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
                alert('updated')
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    return (
        <div className="pb-14">
        <h1 className="text-center text-4xl font-bold mt-8 mb-5">Update Product</h1>
        <form onSubmit={handleUpdate}
          className="flex flex-col justify-center mx-auto max-w-lg px-5"
        >
          <input
            type="text"
            name="name"
            required
            defaultValue={loader.name}
            className="border-b-2 border-black px-3 py-2 focus:outline-none"
          />
          <input
            type="url"
            name="image"
            required
            defaultValue={loader.image}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="brand"
            required
            defaultValue={loader.brand}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="type"
            required
            defaultValue={loader.type}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="number"
            required
            name="price"
            defaultValue={loader.price}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            required
            name="description"
            defaultValue={loader.description}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="number"
            name="rating"
            required
            defaultValue={loader.rating}
            className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
          />
          <input
            type="submit"
            value="Add Product"
            className="bg-blue-600 text-white font-semibold mt-3 rounded-md cursor-pointer py-2"
          />
        </form>
      </div>
    );
};

export default Update;