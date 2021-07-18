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
import {commerce} from "./lib/commerce"
function App({ current }) {
  const [products,setProducts]=useState([])
  const [cart, setCart]=useState({})
  // const [cart,setCart] = useContext(CartContext);


  const fetchproducts= async ()=>{
    const {data} = await commerce.products.list()
    setProducts(data)

  }
  const fetchcart = async ()=>{
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }
  const addToBasket= async (productId,quantity)=>{
    const item = await commerce.cart.add(productId,quantity)
    setCart(item.cart)
  }
  const handleUpdateqty= async (lineItemId,quantity)=>{
    const response= await commerce.cart.update(lineItemId,{quantity})
    setCart(response.cart)
  }
  const removefromcart=async(lineItemId)=>{
    const response = await commerce.cart.remove(lineItemId)
    setCart(response.cart)
  }
  const emprtycart=async()=>{
    const {cart}= await commerce.cart.empty()
    setCart(cart)
  }
  useEffect(()=>{
    fetchproducts()
    fetchcart()
  },[])
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

          <Route  path="/"exact component={Shop} >
            <Shop products={products} addToBasket={addToBasket}></Shop>
          </Route>
          <Route exact path="/basket" component={Basket} ><Basket cart={cart} handleUpdateqty={handleUpdateqty} removefromcart={removefromcart} emprtycart={emprtycart}></Basket></Route>
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
           <Route path="/fav" component={Mappedfav}>
                {" "}
                <Mappedfav></Mappedfav>
              </Route>
          <Bottomnav totalItems={cart.total_items}></Bottomnav>
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
