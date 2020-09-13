import React, { forwardRef } from "react";
// import StarRateIcon from "@material-ui/icons/StarRate";
import { toast } from "react-toastify";
import Undo from "../Toast/Toast";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./CheckoutProduct.scss";
const CheckoutProduct = forwardRef((props, ref) => {
  const { data, hideButton } = props;
  const [{ basket, toRemove }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    // setTimeout(() => {
    //   dispatch({
    //     type: "REMOVE_FROM_BASKET",
    //     id: data.id,
    //   });
    // }, 500);
    dispatch({
      id: data.id,
      type: "QUEUE_FOR_REMOVAL",
    });

    toast(
      <Undo
        type="remove_toast"
        item={data}
        // deleteItem={() => dispatch({ type: "REMOVE_FROM_BASKET", id: data.id })}
        onUndo={() => dispatch({ id: data.id, type: "UNDO" })}
      />,
      {
        onClose: () => {
          dispatch({ type: "REMOVE_FROM_BASKET", id: data.id });
          // console.log(toRemove.filter((v) => v !== data.id));
          // if (stop) dispatch({ type: "REMOVE_FROM_BASKET", id: data.id })
        },
      }
    );
  };
  return (
    <div className="checkoutProduct" ref={ref}>
      <img className="checkoutProduct__image" src={data.image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{data.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{data.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* {Array(data.rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon key={i} />
            ))} */}
          <Rating name="read-only" value={data.rating} readOnly />
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
});

export default CheckoutProduct;
