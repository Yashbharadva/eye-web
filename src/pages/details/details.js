import React from "react";
import DetailsNav from "../../component/details-com/details-nav/details-nav";
import FetchItem from "../../component/details-com/fetch-item/fetch-item";
import Navbar from "../../component/homepage-com/navbar/navbar";

const Details = () => {
    return(
        <div className="details-for">
            <DetailsNav />
            <FetchItem />
        </div>
    )
}

export default Details;