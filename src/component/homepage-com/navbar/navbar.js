import React from "react";
import './navbar.styles.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

const Navbar = () => {
    const history = useHistory()
    return (
        <div className="navbar">
            <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" onClick={() => history.push("/Homepage")}/> 
            <ul className="navigation-bar">
                <ui className="home">Home</ui>
                <ui className="home">Shop</ui>
                <ui className="home">Featured</ui>
                <ui className="home">Recommended</ui>
            </ul>
            <div className="logo-search">
                <input className="serach-type" type="search" placeholder="Search product.." />
            </div>
            <div className="logo">
                <AiOutlineSearch />
            </div>
            <div className="cart-bag">
                <BiShoppingBag size="22px" />
            </div>
            <div className="sign-up-in">
                <Link className="sign-up" to="sign-up">
                    Sign-up
                </Link>
                <div className="sign-in">
                    Sign-in
                </div>
            </div>
        </div>
    )
}

export default Navbar;