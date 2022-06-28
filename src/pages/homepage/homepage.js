import React from "react";
import Navbar from "../../component/navbar/navbar";
import Banner from "../../component/banner/banner";
import FeProduct from "../../component/feProduct/feProduct";
import ReProduct from "../../component/reProduct/reProduct";
import Footer from "../../component/footer/footer";

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