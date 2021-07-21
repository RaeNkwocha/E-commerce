import React from "react";

import cross from "./Image/delete.png";
function Incart({ item, handleUpdateqty, removefromcart }) {
  const removeitem = (lineItemId) => removefromcart(lineItemId);

  return (
    <>
      <div className="incart">
        <div className="cart-img">
          <img
            style={{ width: "40%", margin: "20px" }}
            src={item.media.source}
            alt=""
          ></img>
        </div>
        <div className="new-layout">
          <div className="layout-flex">
            <h6>{item.name}</h6>
            <img
              onClick={() => removeitem(item.id)}
              style={{ width: "12px" }}
              src={cross}
              alt=""
            ></img>
          </div>

          <p
            className="cart-desc"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></p>
          <div className="layout-flex-1">
            <div
              className="new-counter"
              style={{ width: "20%", display: "flex" }}
            >
              <div className="circle">
                <i
                  style={{ margin: "10px" }}
                  class="fa fa-minus"
                  onClick={() => handleUpdateqty(item.id, item.quantity - 1)}
                ></i>
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
                <h3>{item.quantity}</h3>
              </div>
              <div className="circle">
                <i
                  onClick={() => handleUpdateqty(item.id, item.quantity + 1)}
                  style={{ color: "#53B175", margin: "10px" }}
                  class="fa fa-plus"
                ></i>
              </div>
            </div>
            <h6>${item.price.formatted * item.quantity}</h6>
          </div>
        </div>
      </div>
      <div className="line-2"></div>
    </>
  );
}

export default Incart;
