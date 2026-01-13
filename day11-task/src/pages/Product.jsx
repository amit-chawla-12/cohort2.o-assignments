import React from "react";
import Card from "../components/Card";
import { cardsDataContext } from "../context/ProductContext";
import { useContext } from "react";

const Product = () => {
  const [data, setData] = useContext(cardsDataContext);
  // console.log(data);

  return (
   <div className="wrap"> <div className="card-page">
      {data.map(function (elem, idx) {
        return <Card element={elem}/>;
      })}
    </div></div>
  );
};

export default Product;
