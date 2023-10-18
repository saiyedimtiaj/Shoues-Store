const AddProduct = () => {
  return (
    <div className="pb-14">
      <h1 className="text-center text-4xl font-bold mt-8 mb-5">Add Product</h1>
      <form className="flex flex-col justify-center mx-auto max-w-lg px-5">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border-b-2 border-black px-3 py-2 focus:outline-none"
        />
        <input
          type="url"
          name="image"
          placeholder="Image Url"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="type"
          placeholder="Product Type"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="description"
          placeholder="Sort Description"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="number"
          name="rating"
          placeholder="Enter Rating"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input type="submit" value="Add Product" className="bg-blue-600 text-white font-semibold mt-3 rounded-md cursor-pointer py-2" />
      </form>
    </div>
  );
};

export default AddProduct;
