// import { Badge } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../Context/Context";
// import "./nav.css";
import "../../Component css/nav.css"
import { FavContext, Favcontext } from "../../Context/Favcontext";

function Bottomnav() {
  const [tab, setTab] = useState(1);
  const [cart] = useContext(CartContext);
  const [fav] = useContext(FavContext);

  const toggle = (index) => {
    setTab(index);
  };
  const history = useHistory();
  const handlenav = () => {
    history.push("/basket");
  };
  return (
    <div>
      <div className="nav">
        <div className="icons-flex">
          <Link to="/">
            <button
              className={tab === 1 ? "btn-active" : "btn"}
              onClick={() => toggle(1)}
            >
              <i class="fa fa-home"></i>
            </button>
          </Link>
          <p>Shop</p>
        </div>
        <div className="icons-flex">
          <Link to="/Explore">
            <button
              className={tab === 2 ? "btn-active" : "btn"}
              onClick={() => toggle(2)}
            >
              <i class="fa fa-search"></i>
            </button>
          </Link>
          <p>Explore</p>
        </div>

        <div className="icons-flex">
            <button
              className={tab === 3 ? "btn-active" : "btn"}
              onClick={handlenav}
            >
              {" "}
              <i class="fa fa-shopping-cart"></i>{" "}
            </button>

          <p>Cart({cart.length})</p>
        </div>
        <div className="icons-flex">
          <Link style={{ textDecoration: "none", color: "black" }} to="fav">
              <button
                className={tab === 4 ? "btn-active" : "btn"}
                onClick={() => toggle(4)}
              >
                <i class="fa fa-heart"></i>
              </button>
            <p>Favourite({fav.length})</p>
          </Link>
        </div>
        <div className="icons-flex">
          <Link style={{ textDecoration: "none", color: "black" }} to="account">
            <button
              className={tab === 5 ? "btn-active" : "btn"}
              onClick={() => toggle(5)}
            >
              <i class="fa fa-user"></i>
            </button>
            <p>Account</p>
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Bottomnav;
