import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase/firebase.utils";

import './shopPage-main.styles.scss';

const ShopPageMain = () => {
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

    // console.log(product[0].title);

    return (
        <div className="feprduct">
            <div className="f-product">
                Featured Products
            </div>
            <div className="fetch-item">
                {product[0]?.Shop.map(product => (
                    <div className="fetch">
                        <img src={product.imageUrl} key={product.id} alt="" />
                        <div className="name-sub">
                            <div className="fetch-name" key={product.id}>{product.name}</div>
                            <div className="fetch-subName" key={product.id}>{product.subName}</div>
                            <div className="fetch-price" key={product.id}>${product.price}.00</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ShopPageMain;