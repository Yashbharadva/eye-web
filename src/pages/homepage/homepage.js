import React from "react";
import Navbar from "../../component/homepage-com/navbar/navbar";
import Banner from "../../component/homepage-com/banner/banner";
import FeProduct from "../../component/homepage-com/feProduct/feProduct";
import ReProduct from "../../component/homepage-com/reProduct/reProduct";
import Footer from "../../component/homepage-com/footer/footer";

const HomePage = () => {
    return(
        <div className="homepage">
            <Navbar />
            <Banner />
            <FeProduct />
            <ReProduct />
            <Footer />
        </div>
    )
}

export default HomePage;