import React from "react";
import "../../Component css/explore.css";
import Bottomnav from "../Nav/Bottomnav";
import Incart from "./Incart";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";

function Basket({
  cart,
  handleUpdateqty,
  removefromcart,
  emprtycart,
  totalItems,
  favitems,
}) {
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
          <div key={item.id}>
            <Incart
              key={item.id}
              item={item}
              handleUpdateqty={handleUpdateqty}
              removefromcart={removefromcart}
              emprtycart={emprtycart}
              cart={cart}
            ></Incart>
          </div>
        ))}
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
          <Button
            style={{ margin: "8px" }}
            variant="contained"
            color="secondary"
            onClick={emprtycart}
          >
            Empty
          </Button>
          <Link to="/checkout">
            <Button
              style={{ margin: "8px" }}
              variant="contained"
              color="primary"
            >
              CheckOut
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
  if (!cart.line_items)
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <CircularProgress></CircularProgress>
      </div>
    );
  return (
    <>
      <Bottomnav totalItems={totalItems} favitems={favitems}></Bottomnav>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textAlign: "center", margin: "20px" }}>My cart</h3>
        <h4 style={{ margin: "20px" }}>
          Subtotal:{" "}
          <span style={{ color: "green" }}>
            {cart.subtotal.formatted_with_symbol}
          </span>
        </h4>{" "}
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
