import React, { useState, useEffect } from "react";
import './navbar.styles.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { Button, Drawer, Radio, Space } from 'antd';

// import { Link } from "react-router-dom";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search?product=${search}`);
        setSearch("");
    };

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
    };

    // const handleOpen = key => {
    //     setOpen(true);
    //     setPlacement(key);
    //   };

    // const remove = () => {
        // localStorage.removeItem('Email');
    // };
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
                <ui className="home" onClick={() => history.push("/")}>Home</ui>
                <ui className="home" onClick={() => history.push("/shop-page")}>Shop</ui>
                <ui className="home">Featured</ui>
                <ui className="home">Recommended</ui>
            </ul>

            <form onSubmit={handleSearch}>
                <div className="logo-search">
                    <input
                        className="serach-type"
                        type="search"
                        placeholder="Search product.."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
            </form>
            <div className="logo">
                <AiOutlineSearch />
            </div>
            <div className="cart-bag" onClick={showDrawer}>
                <BiShoppingBag size="22px" />

                <Drawer 
                    // title="Drawer with extra actions"
                    placement={placement}
                    width={500}
                    onClose={onClose}
                    visible={visible}
                    extra={
                        <Space>
                        {/* <> */}
                            <Button onClick={() => setOpen(false)}>Close</Button>
                            <Button type="primary" onClick={() => setOpen(false)}>
                                Clear Basket
                            </Button>
                            {/* </> */}
                        </Space>
                    }
                >
                    <p>Basket is Empty.</p>
                    {/* <p>Some contents...</p>
                    <p>Some contents...</p> */}
                </Drawer>
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