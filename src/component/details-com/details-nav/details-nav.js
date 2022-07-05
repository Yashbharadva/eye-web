import React, { useState, useEffect } from "react";
import './details-nav.styles.scss';
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

// import { Link } from "react-router-dom";

const DetailsNav = () => {
    const history = useHistory();
    const [search, setSearch] = useState("");
    const [product, setProduct] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search?product=${search}`);
        setSearch("");
    };

    // useEffect(() => {
    //     getProduct()
    // }, [])

    // useEffect(() => {
    // }, [product])

    // const getProduct = () => {
    //     const productCollectionRef = collection(db, 'Search Product')
    //     getDocs(productCollectionRef)
    //         .then(response => {
    //             const pro = response.docs.map(doc => (
    //                 doc.data()
    //             ))
    //             setProduct(pro)
    //         })
    //         .catch(error => console.log(error.message))
    // }
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
    
    return (
        <div className="navbar-shop">
            <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" onClick={() => history.push("/")} />
            <ul className="navigation-bar">
            <ui className="home" onClick={() => history.push("/")}>Home</ui>
                <ui className="home" onClick={() => history.push("/shop-page")}>Shop</ui>
                <ui className="home">Featured</ui>
                <ui className="home">Recommended</ui>
            </ul>
            {/* <div className="logo-search"> */}
            <form className="logo-search" onSubmit={handleSearch}>
                <input
                    className="serach-type"
                    type="search"
                    placeholder="Search product.."
                    onChange={(e) => { setSearch(e.target.value) }}
                    value = {search}
                />
                </form>
            {/* </div> */}
            <div className="all-in">

                {/* <div className="filter">
                    Filter <AiOutlineFilter />
                </div> */}
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

export default DetailsNav;