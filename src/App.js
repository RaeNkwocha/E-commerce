import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Loading from "./Splash/Loading";
import Signup from "./Auth/Signup";
import { AuthProvider } from "./Auth/Authcontext";
import Login from "./Auth/Login";
import Shop from "./components/Products/Shop";
import { Context } from "./Context/Context";

import Basket from "./components/Basket/Basket";
import Fav from "./components/Fav/Fav";
import { Favcontext } from "./Context/Favcontext";

import { commerce } from "./lib/commerce";
import Checkout from "./checkout/Checkout";
import Payment from "./checkout/checkoutform/Payment";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [fav, setFav] = useState({});
  const [loading, setLoading] = useState(false);
  const [errormesseage, setErrorMessage] = useState("");
  const [order, setOrder] = useState({});

  const fetchproducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(true);
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
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
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
            <Switch>
              <AuthProvider>
                <Route exact path="/" component={Loading}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/login" component={Login}></Route>

                <Route path="/shop" exact component={Shop}>
                  <Shop
                    totalItems={cart.total_items}
                    favitems={fav.total_items}
                    products={products}
                    addToBasket={addToBasket}
                    addToFav={addToFav}
                    loading={loading}
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
                    products={products}
                    addToFav={addToFav}
                    addToBasket={addToBasket}
                    fav={fav}
                    removefromfav={removefromfav}
                    emprtyFav={emprtyFav}
                  ></Fav>
                </Route>
                <Route exact path="/checkout" component={Checkout}>
                  <Checkout
                    cart={cart}
                    order={order}
                    onCaptureCheckout={handleCaptureCheckout}
                    error={errormesseage}
                  ></Checkout>
                </Route>
                <Route exact path="/payment" component={Payment}>
                  <Payment></Payment>
                </Route>
              </AuthProvider>
            </Switch>
          </div>
        </Router>
      </Favcontext>
    </Context>
  );
}

export default App;
