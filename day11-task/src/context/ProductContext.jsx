import React from "react";
import { useState } from "react";
import { fetchData } from "../Api/DataApi";
import { createContext } from "react";
import { useEffect } from "react";
export const cardsDataContext = createContext();
const ProductContext = (props) => {
  const [data, setData] = useState([]);
  useEffect(function () {
    const loadData =async()=>{
        const result = await  fetchData();
        setData(result);
    }
    loadData()
    // console.log(fetchData());
  }, []);

  //   setData;
  return (
    <cardsDataContext.Provider value={[data, setData]}>
      {props.children}
    </cardsDataContext.Provider>
  );
};

export default ProductContext;
