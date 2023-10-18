

const Badze = () => {
    return (
        <div className="container mx-auto mt-16">
            <h1 className="mb-7 text-center font-bold text-5xl">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 ">
            <div>
                <img src="../assets/s1.jpg" alt="" />
                <p className="text-lg mt-2 font-bold text-gray-600">July 7, 2023</p>
                <h5 className="text-xl mt-1 mb-2 font-semibold">The Latest Shoe Trends for Fall 2023</h5>
                <p> Stay ahead of the fashion curve with this comprehensive guide to the hottest shoe trends for the Fall 2023 season.</p>
                <button className="mt-3 font-bold border-b-2 border-black">READ MORE</button>
            </div>
            <div>
                <img src="../assets/s2.jpg" alt="" />
                <p className="text-lg mt-2 font-bold text-gray-600">May 26, 2023</p>
                <h5 className="text-xl mt-1 mb-2 font-semibold">A Stylish Walk Through the Season</h5>
                <p>Leather shoes are timeless, but they require proper care to maintain their elegance and longevity</p>
                <button className="mt-9 font-bold border-b-2 border-black">READ MORE</button>
            </div>
            <div>
                <img className="h-72" src="../assets/5-570x350.jpg" alt="" />
                <p className="text-lg mt-2 font-bold text-gray-600">January 20, 2023</p>
                <h5 className="text-xl mt-1 mb-2 font-semibold">Choosing Shoes for Your Fitness Journey</h5>
                <p> This blog post explores the essential factors to consider when selecting the perfect pair of running shoes to support your fitness goals.</p>
                <button className="mt-3 font-bold border-b-2 border-black">READ MORE</button>
            </div>
        </div>
        </div>
    );
};

export default Badze;