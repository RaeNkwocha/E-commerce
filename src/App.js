import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Loading from "./Splash/Loading";
import Signup from "./Auth/Signup";
import { AuthProvider } from "./Auth/Authcontext";
import Login from "./Auth/Login";
import Shop from "./components/Products/Shop";
import { Context } from "./Context/Context";
import Bottomnav from "./components/Nav/Bottomnav";
import Basket from "./components/Basket/Basket";
import Fav from "./components/Fav/Fav";
import { Favcontext } from "./Context/Favcontext";
import Mappedfav from "./components/Fav/Mappedfav";

function App({ current }) {
  return (
    <Context>
      <Favcontext>
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Switch>
          <AuthProvider>
        {/* <Route exact path="/"  component={Loading}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/login" component={Login}></Route> */}

          <Route  path="/"exact component={Shop} />
          <Route exact path="/basket" component={Basket} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
           <Route path="/fav" component={Mappedfav}>
                {" "}
                <Mappedfav></Mappedfav>
              </Route>
          <Bottomnav></Bottomnav>
          </AuthProvider>
        </Switch>
      </div>
    </Router>
    </Favcontext>
    </Context>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
