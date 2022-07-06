import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../firebase/firebase.utils";

import './shopPage-main.styles.scss';

const ShopPageMain = () => {
    const [product, setProduct] = useState("");
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

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

    return (
        <div className="fetch-shop">
        
            <div className="fetch-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {product[0]?.Shop.map(product => (
                    <div className="fetch-img">
                        <img src={product.imageUrl} key={product.id} alt="" />
                        <div className="name-sub">
                            <div className="fetch-shop-name" key={product.id}>{product.name}</div>
                            <div className="fetch-shop-subName" key={product.id}>{product.subName}</div>
                            <div className="fetch-shop-price" key={product.id}>${product.price}.00</div>
                            {isHovering && <div className="fetch-shop-cart" key={product.id}>{product.cart}</div>}
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
    )
}
export default ShopPageMain;

// import {useState} from 'react';

// const App = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div>
//       <div>
//         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//           Hover me
//         </div>

//         {isHovering && <h2>Hello world</h2>}
//       </div>
//     </div>
//   );
// };

// export default App;