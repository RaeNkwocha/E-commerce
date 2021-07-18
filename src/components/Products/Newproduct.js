import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import "../../Component css/products.css"
import btn from "./shopImage/btn.png"
import { connect } from "react-redux";
import {loadCurrentItem} from "../../redux/Shopping/shopping-actions"
import { Link } from "react-router-dom";
import TransitionsModal from "../../Modal/modal";
function Newproduct({   product,addToBasket}) {
  const handleAddtoCart=()=> addToBasket(product.id,1)
  // const [cart, setCart] = useContext(CartContext);

  return (
    <>
         
      <div key={product.id} className="container">
      <TransitionsModal product={product}>
          <div className="image-holder">
            <img alt="" src={product.media.source}></img>
          </div>
          </TransitionsModal>

          <div className="para">
            <p>{product.name}</p>
            {/* <p className="desc" dangerouslySetInnerHTML={{__html:product.description}}></p> */}
          </div>
        <div className="para-flex">
          <div className="para">
            <p>${product.price.formatted}</p>
          </div>

          <div className="para">
            <div className="cart" style={{background:"none"}}>
              <button
             
                style={{background:"none",border:"none" }}
              > <img onClick={handleAddtoCart} style={{width:"100%"}} src={btn}></img>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
    //   addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
export default connect (null,mapDispatchToProps)(Newproduct);
