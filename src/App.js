import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Home from "./Layouts/Home/Home";
import Checkout from "./Layouts/Checkout/Checkout";
import Login from "./Layouts/Login/Login";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[User] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* home */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
