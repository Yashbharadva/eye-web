import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

const Search = () => {
    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("product");
    console.log("search", search);

    useEffect(() => {
        searchData();
    }, [search])

    const searchData = () => {
        product[0]?.Shop.child().orderBychild("product").equalTo(search).on("value", (snapshot) => {
            if(snapshot.val()){
                const data = snapshot.val();
                setData(data);
            }
        })
    }

    const [product, setProduct] = useState("");

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
    }, [product])

    const getProduct = () => {
        const productCollectionRef = collection(db, 'Search Product')
        getDocs(productCollectionRef)
            .then(response => {
                const pro = response.docs.map(doc => (
                    doc.data()
                ))
                setProduct(pro)
            })
            .catch(error => console.log(error.message))
    }
    return(
        <div>
            {/* <h1>
                Search thay gayu
            </h1> */}
            {product[0]?.Shop.length == 0 ? (
                <h2>No Search Found with the Name : {query.get("product")}</h2>
            ) : (
            <div className="fetch-shop">
            {/* <div className="shop-product">
                Featured Products
            </div> */}
            <div className="fetch-item">
                {product[0]?.Shop.map((product) => {
                    return(
                    <div className="fetch-img">
                        <img src={product.imageUrl} key={product.id} alt="" />
                        <div className="name-sub">
                            <div className="fetch-shop-name" key={product.id}>{product.name}</div>
                            <div className="fetch-shop-subName" key={product.id}>{product.subName}</div>
                            <div className="fetch-shop-price" key={product.id}>${product.price}.00</div>
                        </div>
                    </div>
                    )
                 })}
            </div>
        </div>)}
        </div>
    )
}

export default Search;