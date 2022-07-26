import React from "react";
import "./css/product.css";

function Product({ productsList }) {
  return (
    <div className="banner">
      <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />

      <div className="products-wrap">
        {productsList.map((item) => {
          return (
            <div className="product">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                alt=""
              />
              <h3>Product name</h3>
              <p>Product name</p>
              <button>Add to Cart</button>
            </div>
          );
        })}

        <div className="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <h3>Product name</h3>
          <p>Product name</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <h3>Product name</h3>
          <p>Product name</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <h3>Product name</h3>
          <p>Product name</p>
          <button>Add to Cart</button>
        </div>

        
      </div>
    </div>
  );
}

export default Product;
