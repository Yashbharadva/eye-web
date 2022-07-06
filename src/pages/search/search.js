import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import './search.styles.scss';
import SearchData from "../../component/shopPage-com/search-data/search-data";

const Search = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("product");

    const [product, setProduct] = useState("");

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const productCollectionRef = collection(db, 'Search Product')
        getDocs(productCollectionRef)
            .then(response => {
                const pro = response.docs.map(doc => (
                    doc.data()
                ))
                const data = pro[0].Shop.find(e => {
                    return e.name === search
                }) 
                setProduct(data)
            })
            .catch(error => console.log(error.message))
    }
    return(
        
        <div>
            <SearchData />
            <div className="change-data">
            {!product ? (
                <h2>No Search Found with the Name : {query.get("product")}</h2>
            ) : (
            <div className="fetch-shop">
            <div className="fetch-item">
                <div className="fetch-img">
                    <img src={product.imageUrl} key={product.id} alt="" />
                    <div className="name-sub">
                        <div className="fetch-shop-name" key={product.id}>{product.name}</div>
                        <div className="fetch-shop-subName" key={product.id}>{product.subName}</div>
                        <div className="fetch-shop-price" key={product.id}>${product.price}.00</div>
                    </div>
                </div>
            </div>
        </div>)}
        </div>
        </div>
    )
}

export default Search;