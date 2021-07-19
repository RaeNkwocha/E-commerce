import React from "react";
import cross from "../../components/Basket/Image/delete.png";
import btn from "../Products/shopImage/btn.png";

function Infav({ item, removefromfav, addToBasket, products }) {
  const removeitem = (lineItemId) => removefromfav(lineItemId);
  const handlefromFav = () => addToBasket(products.id, 1);

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

          <div className="layout-flex-1">
            <h6>${item.price.formatted * item.quantity}</h6>
            <div className="cart" style={{ background: "none" }}>
              <button style={{ background: "none", border: "none" }}>
                {" "}
                <img
                  onClick={handlefromFav}
                  style={{ width: "50%", marginTop: "5px" }}
                  src={btn}
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line-2"></div>
    </>
  );
}

export default Infav;
