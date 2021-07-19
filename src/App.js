import React, { useContext, useEffect, useState } from "react";
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
import { CartContext, Context } from "./Context/Context";
import Bottomnav from "./components/Nav/Bottomnav";
import Basket from "./components/Basket/Basket";
import Fav from "./components/Fav/Fav";
import { Favcontext } from "./Context/Favcontext";
import Mappedfav from "./components/Fav/Mappedfav";
import { commerce } from "./lib/commerce";
function App({ current }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [fav, setFav] = useState({});
  // const [cart,setCart] = useContext(CartContext);

  const fetchproducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchcart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const fetchfav = async () => {
    const fav = await commerce.cart.retrieve();
    setFav(fav);
  };
  const addToBasket = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const addToFav = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setFav(item.cart);
  };
  const handleUpdateqty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };
  const removefromcart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };
  const removefromfav = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setFav(response.cart);
  };
  const emprtycart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const emprtyFav = async () => {
    const { cart } = await commerce.cart.empty();
    setFav(cart);
  };
  useEffect(() => {
    fetchproducts();
    fetchcart();
    fetchfav();
  }, []);
  return (
    <Context>
      <Favcontext>
        <Router>
          <div className="app">
            {/* <Navbar /> */}
            <Switch>
              <AuthProvider>
                <Route exact path="/" component={Loading}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                {/* <Bottomnav
                  totalItems={cart.total_items}
                  favitems={fav.total_items}
                ></Bottomnav> */}
                <Route path="/shop" exact component={Shop}>
                  <Shop
                    totalItems={cart.total_items}
                    favitems={fav.total_items}
                    products={products}
                    addToBasket={addToBasket}
                    addToFav={addToFav}
                  ></Shop>
                </Route>
                <Route exact path="/basket" component={Basket}>
                  <Basket
                    totalItems={cart.total_items}
                    favitems={fav.total_items}
                    cart={cart}
                    handleUpdateqty={handleUpdateqty}
                    removefromcart={removefromcart}
                    emprtycart={emprtycart}
                  ></Basket>
                </Route>
                <Route exact path="/fav" component={Fav}>
                  <Fav
                    totalItems={cart.total_items}
                    favitems={fav.total_items}
                    addToFav={addToFav}
                    fav={fav}
                    removefromfav={removefromfav}
                    emprtyFav={emprtyFav}
                  ></Fav>
                </Route>
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
