import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import BasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.scss";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../StateProvider/Reducer";
import { auth } from "../../firebase";
const Header = () => {
  const history = useHistory();
  const [{ basket, toRemove, user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </NavLink>

      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="option_header">
            Hello, {user == null ? "Gust" : user.email}
          </span>

          <span
            className="option_body"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (user == null) history.push("/login");
              else {
                auth.signOut();
              }
            }}
          >
            {user == null ? "Sign In" : "Sign out"}
          </span>
        </div>
        <div className="header_option">
          <span className="option_header">Returns</span>
          <span className="option_body">& Orders</span>
        </div>
        <div className="header_option">
          <span className="option_header">Yuor</span>
          <span className="option_body">Prime</span>
        </div>

        <NavLink className="header_option basket" to="/checkout">
          <BasketIcon />
          <span className="option_body count">
            {getBasketTotal(basket, toRemove)}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
