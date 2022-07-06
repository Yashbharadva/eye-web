import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase/firebase.utils";

import './feProduct.styles.scss';
import { Link } from "react-router-dom";

const FeProduct = () => {
    const [product, setProduct] = useState("");

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
    }, [product])

    const getProduct = () => {
        const productCollectionRef = collection(db, 'Featured Products')
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
                {product[0]?.title.map(product => (
                    <Link className="fetch" to={`/product/${product.id}`}>
                        <img src={`${product.imageUrl}`} key={product.id} alt="" />
                        <div className="name-sub">
                            <div className="fetch-name" key={product.id}>{product.name}</div>
                            <div className="fetch-subName" key={product.id}>{product.subName}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default FeProduct;