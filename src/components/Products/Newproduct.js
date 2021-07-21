import React from "react";
import "../../Component css/products.css";
import btn from "./shopImage/btn.png";
import TransitionsModal from "../../Modal/modal";
function Newproduct({ product, addToBasket, addToFav }) {
  const handleAddtoCart = () => addToBasket(product.id, 1);

  return (
    <>
      <div key={product.id} className="container">
        <TransitionsModal
          addToFav={addToFav}
          product={product}
          addToBasket={addToBasket}
        >
          <div className="image-holder">
            <img alt="" src={product.media.source}></img>
          </div>
        </TransitionsModal>

        <div className="para">
          <p>{product.name}</p>
        </div>
        <div className="para-flex">
          <div className="para">
            <p>${product.price.formatted}</p>
          </div>

          <div className="para">
            <div className="cart" style={{ background: "none" }}>
              <button style={{ background: "none", border: "none" }}>
                {" "}
                <img
                  onClick={handleAddtoCart}
                  style={{ width: "100%" }}
                  alt=""
                  src={btn}
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newproduct;
