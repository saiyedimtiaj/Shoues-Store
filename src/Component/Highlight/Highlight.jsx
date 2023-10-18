

const Highlight = () => {
    return (
        <div className="container mx-auto px-5 mt-24 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="row-span-2">
                    <img src="../assets/img_category1.jpg" alt="" />
                </div>
                <div className="row-span-2">
                    <img src="../assets/img_category2.jpg" alt="" />
                </div>
                <div className="col-span-1">
                    <img src="../assets/img_category3.jpg" alt="" />
                </div>
                <div className="col-span-1">
                    <img src="../assets/img_category4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Highlight;