import React, { useState, useEffect } from "react";
import './navbar.styles.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

const Navbar = () => {

    const remove = () => {
        // localStorage.removeItem('Email');
    };
    // const [items, setItems] = useState("");

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.setItem('items'));
    //     if (items) {
    //         setItems(items);
    //     }
    // }, []);
    const history = useHistory()
    return (
        <div className="navbar">
            <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" onClick={() => history.push("/")} />
            <ul className="navigation-bar">
                <ui className="home">Home</ui>
                <ui className="home" onClick={() => history.push("/shop-page")}>Shop</ui>
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
            {/* {!localStorage.getItem("Email") ? */}
            <div className="sign-up-in">
                    <Link className="sign-up" to="/sign-up">
                        Sign-up
                    </Link>
                    <Link className="sign-in" to="/sign-in">
                        Sign-in
                    </Link>
                </div>
                {/* (
                    <div className="log-out" onClick={remove}>
                        LogOut
                    </div>
                ) */}

            {/* {localStorage.getItem("user-info") ? (
                <Link to="/authentication/sign-in" onClick={handlelogout}>
                  Log Out
                </Link>
              ) : (
                <Link to="/authentication/sign-in">Sign-in</Link>
              )} */}
        </div>
    )
}

export default Navbar;