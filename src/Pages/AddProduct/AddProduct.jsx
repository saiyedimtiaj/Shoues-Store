import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const AddProduct = () => {
  const { dark } = useContext(AuthContext);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    if (rating > 5 || rating < 1) {
      toast.error("get retting getter then 1 and lower then 5");
    }
    const product = { name, image, brand, type, price, description, rating };

    fetch("https://assingment-10-server-eta.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("product added");
          form.reset();
        }
      });
  };

  return (
    <div className="pb-14">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-center text-4xl font-bold mt-8 mb-5">Add Product</h1>
      <form
        onSubmit={handleAddProduct}
        className="flex flex-col justify-center mx-auto max-w-lg px-5"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Product Name"
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
          placeholder="Image Url"
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
          placeholder="Product Type"
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
          placeholder="Product Price"
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
          placeholder="Sort Description"
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
          placeholder="Enter Rating"
          className={`${
            dark
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          } border-b-2 mt-3 px-3 py-2 focus:outline-none`}
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

export default AddProduct;
