import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";

// import cross from "../Images/delete.png"
import cross from "./Image/delete.png"
function Incart({ name, price, description, image, id }) {
  const [cart, setCart] = useContext(CartContext);
  const Onremove = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };

  return (
    <>
      <div className="incart">
        <div className="cart-img">
          <img
            style={{ width: "40%", margin: "20px" }}
            src={image}
            alt=""
          ></img>
        </div>
        <div className="new-layout">
          <div className="layout-flex">
            <h6>{name}</h6>
            <img
              onClick={() => Onremove(id)}
              style={{ width: "12px" }}
              src={cross}
              alt=""
            ></img>
          </div>

          <p className="cart-desc">{description}</p>
          <div className="layout-flex-1">
            <div
              className="new-counter"
              style={{ width: "20%", display: "flex" }}
            >
              <div className="circle">
                <i style={{ margin: "10px" }} class="fa fa-minus"></i>
              </div>
              <div
                className="counter-holder"
                style={{
                  margin: "auto",
                  width: "20%",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <h3>1</h3>
              </div>
              <div className="circle">
                <i
                  style={{ color: "#53B175", margin: "10px" }}
                  class="fa fa-plus"
                ></i>
              </div>
            </div>
            <h6>{price}</h6>
          </div>
        </div>
      </div>
      <div className="line-2"></div>
    </>
  );
}

export default Incart;
