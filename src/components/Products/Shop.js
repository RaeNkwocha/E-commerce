import React, { useState } from "react";
import ColorTextFields from "../Input/Searchbar";
import fruit from "./shopImage/Group.png";
import "../../Component css/splash.css";
import banner from "./shopImage/banner.png";
import Newproduct from "./Newproduct";
import Bottomnav from "../Nav/Bottomnav";
import { Spinner } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";

function Shop({
  products,
  addToBasket,
  addToFav,
  totalItems,
  favitems,
  loading,
}) {
  const [input, setInput] = useState("");
  if (products.length > 0) {
    products = products.filter((product) => {
      return product.name.match(input);
    });
  }

  return (
    <>
      <Bottomnav totalItems={totalItems} favitems={favitems}></Bottomnav>
      <div className="Home-page">
        <div className="load-screen">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              padding: "10px",
            }}
            className="fruit"
          >
            <img src={fruit} alt=""></img>
          </div>
          <h6 style={{ textAlign: "center" }}>
            {" "}
            <i
              style={{ fontSize: "0.8rem" }}
              class="fa fa-map-marker"
              aria-hidden="true"
            ></i>{" "}
            Dhaka Location
          </h6>
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ColorTextFields
              input={input}
              setInput={setInput}
            ></ColorTextFields>{" "}
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <img
              style={{ marginTop: "10px", width: "200px" }}
              src={banner}
              alt=""
            ></img>
          </div>
          <section className="section">
            <section className="flex">
              <h5 style={{ fontWeight: "bold" }}>Exclusive Offer</h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            {loading ? (
              <div className="product-display">
                {products.map((product) => {
                  return (
                    <Newproduct
                      key={product.id}
                      product={product}
                      addToFav={addToFav}
                      addToBasket={addToBasket}
                    ></Newproduct>
                  );
                })}
              </div>
            ) : (
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
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Shop;
