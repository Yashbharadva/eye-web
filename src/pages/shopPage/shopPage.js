import React from "react";
import NavShop from "../../component/shopPage-com/nav-shop/nav-shop";
import ShopPageMain from "../../component/shopPage-com/shopPage-main/shopPage-main";

const ShopPage = () => {
    return(
        <div className="shop-page">
            <ShopPageMain />
            <NavShop />
        </div>
    )
}

export default ShopPage;