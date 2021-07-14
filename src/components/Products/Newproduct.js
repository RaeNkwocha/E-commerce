import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import "../../Component css/products.css"
import { connect } from "react-redux";
import {loadCurrentItem} from "../../redux/Shopping/shopping-actions"
import { Link } from "react-router-dom";
function Newproduct({   fruit,loadCurrentItem,name}) {
  const addTocart = (product) => {
    product.inCart=true
    setCart([...cart, { ...product }]);
  };
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
         
      <div key={fruit.id} className="container">
      <Link to={`/product/${fruit.id}`} onClick={() => loadCurrentItem(fruit)}>

          <div className="image-holder">
            <img alt="" src={fruit.image}></img>
          </div>
          </Link>

          <div className="para">
            <p>{fruit.name}</p>
            <p className="desc">{fruit.description}</p>
          </div>
        <div className="para-flex">
          <div className="para">
            <p>{fruit.price}</p>
          </div>

          <div className="para">
            <div className="cart">
              <button
              disabled={fruit.inCart ? true : false}

                onClick={() => addTocart(fruit)}
                style={{ width: "30px" }}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
<h1>{name}</h1>

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
