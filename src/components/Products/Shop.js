import React, { useContext, useState } from "react";
import ColorTextFields from "../Input/Searchbar";
import fruit from "./shopImage/Group.png";
import "../../Component css/splash.css";
import banner from "./shopImage/banner.png";
import Newproduct from "./Newproduct";
import { connect } from "react-redux";
import { CartContext } from "../../Context/Context";
import Bottomnav from "../Nav/Bottomnav";
import Product from "./Product/Product";
import { FavContext } from "../../Context/Favcontext";
import Mappedfav from "../Fav/Mappedfav";
import TransitionsModal from "../../Modal/modal";

function Shop({ products, addToBasket }) {
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
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
                  addToBasket={addToBasket}
                ></Newproduct>
              );
            })}
          </div>

          {/* <section className="flex">
              <h5 style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                Best selling
              </h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            <div className="product-display">
              {products.map((product) => {
                return  <Newproduct key={fruit.id}
                                    product={product}

                              
                                  addTocart={addTocart}

                >

                </Newproduct>
            })}
            </div> */}
          {/* <section className="flex">
              <h5 style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                Groceries
              </h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            <div className="product-display">
              {products.map((product) => {
                return  <Newproduct key={fruit.id}
                                        product={product}
                                
                                  addTocart={addTocart}
                                

                >

                </Newproduct>
            })}
            </div> */}
        </section>
      </div>
    </div>
  );
}
// const mapStateToProps= (state) =>{
//     return{
//       products:state.shop.products,
//       newProducts:state.shop.newProducts,
//       gorceries:state.shop.gorceries
//     }
//   }

export default Shop;
// export default connect(mapStateToProps) (Shop)
