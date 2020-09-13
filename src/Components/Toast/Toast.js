import React from "react";
import "./Toast.scss";
const Toast = ({ onUndo, closeToast, item, type }) => {
  const handleClick = () => {
    //undo the action
    onUndo();
    //update the list
    // deleteItem();
    //close toast
    closeToast();
  };

  return (
    <div className={type}>
      <small style={{ color: "black" }}>{item.title}</small>
      <br />
      <div>
        <strong>Removed!</strong> <button onClick={handleClick}>Undo</button>
      </div>
    </div>
  );
};

export default Toast;
