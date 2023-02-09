import React from "react";
import { ProductsSize } from "./ProductSize";

const FillterProducts = () => {
  return (
    <div style={{
        position:'absolute',
        top:"25px", 
    }}>
      <span>Sizes:</span>{
          ProductsSize.map((size)=>{
              return(
                  <>
                  <input type="checkbox" />
                  <label>{size}</label>
                  </>

              )
          })
      }
    </div>
  );
};

export default FillterProducts;
