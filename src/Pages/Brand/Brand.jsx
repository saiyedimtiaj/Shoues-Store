import { useLoaderData } from "react-router-dom";
import BrandProduct from "../../Component/BrandProduct/BrandProduct";
import Carousel from "../../Component/Carousel/Carousel";


const Brand = () => {
    const products = useLoaderData()
    return (
        <div>
            <Carousel/>
            <BrandProduct products={products} />
        </div>
    );
};

export default Brand;