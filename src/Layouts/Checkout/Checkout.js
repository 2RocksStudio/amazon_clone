import React from "react";
import Subtotal from "../../Components/Subtotal/Subtotal";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
import "./Checkout.scss";
import { useStateValue } from "../../StateProvider/StateProvider";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, toRemove, user }, dispatch] = useStateValue();
  //   const onDismiss = (_) => {
  //     dispatch({
  //       type: "REMOVE_FROM_BASKET",
  //       id: _.id,
  //     });
  //   };
  return (
    <div className="checkout">
      <div className="left">
        <img
          className="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="title">Your shopping Basket</h2>
          <FlipMove>
            {basket
              .filter((v) => !toRemove.includes(v.id))
              .map((_, i) => (
                // <div key={i}
                //   {_.title}
                //   <button onClick={() => onDismiss(_)}>Delect</button>
                // </div>
                <CheckoutProduct key={i} data={_} hideButton={false} />
              ))}
          </FlipMove>
        </div>
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
