import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const id = useParams();
  //  console.log(id.productId);
const navigate = useNavigate()
  useEffect(
    function () {
      const fetchDetail = async () => {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id.productId}`
        );
        console.log(data);
        setProductData(data);
      };  
      
      fetchDetail();
    },
    [id]
  );

  if (!productData) return <h2>Loading...</h2>;
  return (
    <div className="details-page">
      <div className="img">
        <button className="back-btn" onClick={()=>{navigate('/product')}}>back</button>
        <img src={productData.images[0]} alt="" />
      </div>
      <div className="dets">
        <h1>{productData.title}</h1>
        <div className="btn">
          {" "}
          <button className="price-btn btn1">${productData.price}.00</button>
          <button className="price-btn btn2"> INR {(productData.price)*90.24}</button>
        </div>
        <p>{productData.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
