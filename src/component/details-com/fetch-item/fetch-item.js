import React, { useEffect, useState } from "react";

import './fetch-item.styles.scss';
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase/firebase.utils";

// import './feProduct.styles.scss';
// import { Link } from "react-router-dom";

const FetchItem = () => {

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

    return (
        <div className="fetch-the">
            <div className="fetch-item">
                {product[0]?.title.map(product => (
                    <div className="fetch">
                        <img src={product.imageUrl} key={product.id} alt="" />
                        <div className="name-sub">
                            <div className="fetch-name" key={product.id}>{product.name}</div>
                            <div className="fetch-subName" key={product.id}>{product.subName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FetchItem;