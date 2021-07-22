import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Component css/nav.css";
import { Badge } from "@material-ui/core";

function Bottomnav({ totalItems, favitems }) {
  const history = useHistory();
  const handlenav = () => {
    history.push("/basket");
  };
  const Fav = () => (
    <>
      <Link style={{ textDecoration: "none", color: "black" }} to="fav">
        <Badge badgeContent={favitems} color="secondary">
          <button style={{ border: "none", background: "none" }}>
            <i
              style={{ fontSize: "18px" }}
              class="fa fa-heart-o"
              aria-hidden="true"
            ></i>
          </button>
        </Badge>

        <p style={{ fontSize: "10px" }}>Wishlist</p>
      </Link>
    </>
  );
  return (
    <>
      <nav className="navbar">
        <div className="icons">
          <Link to="/shop">
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              {" "}
              <h2 style={{ margin: "10px", position: "sticky" }}>
                raenFoodSTORE
              </h2>
            </button>
          </Link>
        </div>
        <ul>
          <li
            style={{
              marginRight: "20px",
            }}
          >
            <div className="icons-flex">
              <Fav></Fav>
            </div>
          </li>
          <li>
            <div className="icons-flex">
              <Badge badgeContent={totalItems} color="secondary">
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={handlenav}
                >
                  {" "}
                  <i
                    style={{ fontSize: "18px" }}
                    class="fa fa-shopping-cart"
                  ></i>{" "}
                </button>
              </Badge>
              <p style={{ fontSize: "10px" }}>Cart</p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Bottomnav;
