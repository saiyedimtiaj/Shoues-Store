

const Brands = () => {
    return (
        <div className="py-7 grid md:grid-cols-3 grid-cols-2 gap-5 items-center max-w-3xl mx-auto px-5">
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-50" src="../assets/brand1.jpg" alt="" />
                <div className="absolute">
                    <img className="w-20 md:w-32" src="../assets/nike.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-50" src="../assets/brand2.jpg" alt="" />
                <div className="absolute">
                    <img className="w-20 md:w-32" src="../assets/adidas.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-50" src="../assets/brand3.jpg" alt="" />
                <div className="absolute">
                    <img className="w-20 md:w-32" src="../assets/gucci.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-30" src="../assets/brand4.jpg" alt="" />
                <div className="absolute">
                    <h1 className="text-5xl font-medium">ZARA</h1>
                </div>
            </div>
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-50" src="../assets/brand5.jpg" alt="" />
                <div className="absolute">
                    <img className="w-20 md:w-32" src="../assets/puma.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center md:w-60 md:h-60 w-32 h-32 items-center relative">
                <img className="bg-gray-200 opacity-50" src="../assets/brand6.jpg" alt="" />
                <div className="absolute">
                    <img className="w-20 md:w-32" src="../assets/fila.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;