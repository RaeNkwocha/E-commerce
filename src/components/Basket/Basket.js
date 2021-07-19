import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import "../../Component css/explore.css";
import Bottomnav from "../Nav/Bottomnav";
import Incart from "./Incart";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Basket({
  cart,
  handleUpdateqty,
  removefromcart,
  emprtycart,
  totalItems,
  favitems,
}) {
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
              cart={cart}
            ></Incart>
          </div>
        ))}
        <div className="navbar">
          <div className="icons">
            <h5 style={{ marginTop: "15px", marginLeft: "5px" }}>
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </h5>{" "}
          </div>
          <ul>
            <li>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                color="secondary"
                onClick={emprtycart}
              >
                Empty
              </Button>
            </li>
            <li>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                color="primary"
              >
                CheckOut
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <>
      <Bottomnav totalItems={totalItems} favitems={favitems}></Bottomnav>
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
    </>
  );
}

export default Basket;
