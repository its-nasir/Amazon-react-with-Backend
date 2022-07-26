import React from "react";
import "./css/cart.css";

function ShoppingCart() {
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/Day_of/SWM/En_SWM._CB631989064_.jpg"
            alt=""
            className="checkout__ad"
          />

          <div>
            <h3>Hello Md Nasir</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>

            <div className="checkoutProduct">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                className="checkoutProduct__img"
              />
              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">Product Name</p>
                <p className="checkoutProduct__price">
                  <strong>₹ 349.00</strong>
                </p>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout__right">
          <div className="subtotal">
            <p>
              Subtotal (1 item): <strong> ₹12,599.00</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
          <button>Proceed to Buy</button>
        </div>
      </div>

      {/* 2nd  */}
      <div className="checkoutProduct">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          className="checkoutProduct__img"
        />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">Product Name</p>
          <p className="checkoutProduct__price">
            <strong>₹ 349.00</strong>
          </p>
          <button>Delete</button>
        </div>
      </div>

      {/* 3rd  */}

      <div className="checkoutProduct">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
              className="checkoutProduct__img"
            />
            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">Product Name</p>
              <p className="checkoutProduct__price">
                <strong>₹ 349.00</strong>
              </p>
              <button>Delete</button>
            </div>
          </div>
    </>
  );
}

export default ShoppingCart;
