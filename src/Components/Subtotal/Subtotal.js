import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.scss";
import { useStateValue } from "../../StateProvider/StateProvider";
import {
  getBasketPriceTotal,
  getBasketTotal,
} from "../../StateProvider/Reducer";
const Subtotal = () => {
  const [{ basket, toRemove }, dispatch] = useStateValue();
  //   const renderTotalPice = () => {
  //     // let totalPrice = 0;
  //     // basket.map((_, i) => {
  //     //   totalPrice = totalPrice + _.price;
  //     // });
  //     // return totalPrice;
  //     return basket
  //       .filter((v) => !toRemove.includes(v.id))
  //       .reduce((price, item) => item.price + price, 0);
  //   };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({getBasketTotal(basket, toRemove)} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketPriceTotal(basket, toRemove)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Checkout</button>
    </div>
  );
};

export default Subtotal;
