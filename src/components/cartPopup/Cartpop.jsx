import React from "react";
import "./cartpop.css";
import { newProducts, delFromCart } from "../db/func";
import { totPrice } from "../db/func";
import { useState } from "react";

function Cartpop(props) {
  const [, setTotalPrice] = useState(totPrice);

  const activateTot = (pop) => {
    delFromCart(pop);
    setTotalPrice(totPrice);
  };

  return props.trigger ? (
    <React.Fragment>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Close
          </button>
          {props.children}
          <div className="p-left">
            {newProducts.map((item) => (
              <div className="p-item-cont" id={item.id} key={item.id}>
                <img src={item.icon} alt={item.name} className="p-item-icon" />
                <p className="p-item-name">{item.name}</p>
                <p className="p-item-count">{item.price} $</p>
                <button
                  className="p-item-btn"
                  onClick={() => activateTot(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-right">
            <div className="payment-cont">
              <p className="p-total-price">Total price : </p>
              <p className="p-total-price1">{totPrice}</p>
              <p className="p-total-price"> $</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
}

export default Cartpop;
