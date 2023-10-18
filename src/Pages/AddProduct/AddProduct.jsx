const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        if(brand !== 'nike' && brand !== 'adidas' && brand !== 'gucci' && brand !== 'puma' && brand !=='zara' && brand !=='fila'){
            return alert('breand not metched')
        }
        if(rating > 5 || rating < 1 ){
            alert('ratting not valide')
        }
        const product = {name,image,brand,type,price,description,rating};
        
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('product added')
                form.reset()
            }
        })
    }

  return (
    <div className="pb-14">
      <h1 className="text-center text-4xl font-bold mt-8 mb-5">Add Product</h1>
      <form onSubmit={handleAddProduct} className="flex flex-col justify-center mx-auto max-w-lg px-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Product Name"
          className="border-b-2 border-black px-3 py-2 focus:outline-none"
        />
        <input
          type="url"
          name="image"
          required
          placeholder="Image Url"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="brand"
          required
          placeholder="Brand Name"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="type"
          required
          placeholder="Product Type"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Product Price"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Sort Description"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input
          type="number"
          name="rating"
          required
          placeholder="Enter Rating"
          className="border-b-2 border-black mt-3 px-3 py-2 focus:outline-none"
        />
        <input type="submit" value="Add Product" className="bg-blue-600 text-white font-semibold mt-3 rounded-md cursor-pointer py-2" />
      </form>
    </div>
  );
};

export default AddProduct;
