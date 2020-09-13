import React from "react";

import Rating from "@material-ui/lab/Rating";
import "./Product.scss";
import { useStateValue } from "../../StateProvider/StateProvider";
const Product = (props) => {
  const { data } = props;
  const [{ basket }, dispatch] = useStateValue();
  //   console.log(basket);
  const handleAddProductToBasket = () => {
    let newdata = { ...data };
    newdata.id = Math.random() * 9999999;
    dispatch({
      type: "ADD_TO_BASKET",
      item: newdata,
    });
  };

  return (
    <div className="product">
      <div className="info">
        <p className="title">{data.title}</p>
        <p className="price">
          <small>$</small>
          <strong>{data.price}</strong>
        </p>
        <div className="rating">
          {/* {Array(data.rating)
            .fill()
            .map((obj, index) => {
              return <StarRateIcon key={index} />;
            })} */}
          <Rating name="read-only" value={data.rating} readOnly />
        </div>
      </div>
      <img src={data.image} />
      <button onClick={() => handleAddProductToBasket()}>Add to Basket</button>
    </div>
  );
};

export default Product;
