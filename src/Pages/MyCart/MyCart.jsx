import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const MyCart = () => {
    const loader = useLoaderData();
    const {user} = useContext(AuthContext)
    const [cartItem,setCartItem] = useState(loader);
    const {loading} = useContext(AuthContext)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${user.email}/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Remove Item Form Cart Successfully');
                const filtering = cartItem.filter(item=>item._id !== id);
                setCartItem(filtering)
            }
        })
    }

    return (
        <div className="max-w-5xl px-5 mx-auto py-10 ">
            <Toaster position="top-center" reverseOrder={false} />
            {cartItem.length === 0 ? <div className="min-h-[90vh]">
                <p className="text-6xl font-medium">No Content Yet!</p>
            </div> : cartItem?.map(item=><div key={item?._id} className="flex flex-wrap gap-5 items-center justify-between px-5 py-4 border-2 border-black my-4">
                    <img className="w-28 h-28" src={item?.image} alt="" />
                    <h1 className="text-xl font-semibold">{item?.name}</h1>
                    <p className="font-bold text-2xl">${item?.price}</p>
                    <button onClick={()=>handleDelete(item._id)} className="bg-red-600 px-5 py-1.5 font-semibold rounded text-white">DELETE</button>
            </div>)}
        </div>
    );
};

export default MyCart;