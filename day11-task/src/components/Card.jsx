import React from "react";
import ProductDetails from "../pages/ProductDetails";
import { Navigate, useNavigate } from "react-router-dom";

const Card = ({ element }) => {
  console.log(element);
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        console.log(element.id);
        navigate(`/product/${element.id}`);
      }}
    >
      <img src={element.images[0]} alt="" />
      <h3>{element.title}</h3>
      {/* <p>{element.description}</p> */}
      <p>$ {element.price}</p>
    </div>
  );
};

export default Card;
