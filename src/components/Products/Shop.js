import React, { useState } from "react";
import ColorTextFields from "../Input/Searchbar";
import fruit from "./shopImage/Group.png";
import "../../Component css/splash.css";
import banner from "./shopImage/banner.png";
import Newproduct from "./Newproduct";

function Shop({ products, addToBasket, addToFav }) {
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        width: "100%",
      }}
    >
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
          <ColorTextFields input={input} setInput={setInput}></ColorTextFields>{" "}
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
        </section>
      </div>
    </div>
  );
}

export default Shop;
