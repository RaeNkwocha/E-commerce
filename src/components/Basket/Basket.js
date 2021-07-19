import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import "../../Component css/explore.css";
import Bottomnav from "../Nav/Bottomnav";
import Incart from "./Incart";
import { Link } from "react-router-dom";

function Basket({ cart, handleUpdateqty, removefromcart, emprtycart }) {
  // const [cart] = useContext(CartContext);

  const Emptycart = () => (
    <>
      <h3
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        Cart is Empty
      </h3>
    </>
  );
  const FilledCart = () => (
    <>
      <section>
        {cart.line_items.map((item) => (
          <div>
            <Incart
              item={item}
              handleUpdateqty={handleUpdateqty}
              removefromcart={removefromcart}
              emprtycart={emprtycart}
            ></Incart>
            {/* <button onClick={emprtycart}>Empty</button>
          <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2> */}
          </div>
        ))}
      </section>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center", margin: "20px" }}>My cart</h3>
      </div>
      <div className="line"></div>
      <section>
        {!cart.line_items.length ? (
          <Emptycart></Emptycart>
        ) : (
          <FilledCart></FilledCart>
        )}
      </section>
      <button onClick={emprtycart}>Empty</button>
      <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>{" "}
    </>
  );
}

export default Basket;
