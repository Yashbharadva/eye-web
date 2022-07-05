import React from "react";
import { useHistory } from "react-router-dom";
// import {BsArrowRightCircleFill} from "react-icons/bs";
import './banner.styles.scss';

const Banner = () => {
    const history = useHistory("");
    return (
        <div className="main">
            <div className="banner">
                <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" alt="" />
                <h1>See everything with Clarity</h1>
                <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and <br /><p className="p-next">contacts—we've got your eyes covered.</p></p>
                <div className="shop" onClick={() => history.push("/shop-page")}>
                    SHOP NOW 
                </div>
            </div>
        </div>
    )
}

export default Banner;