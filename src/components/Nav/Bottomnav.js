import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Component css/nav.css";
import { Badge } from "@material-ui/core";

function Bottomnav({ totalItems }) {
  const history = useHistory();
  const handlenav = () => {
    history.push("/basket");
  };
  return (
    <nav className="navbar">
      <div className="icons">
        <Link to="/">
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            {" "}
            <h2 style={{ margin: "10px" }}>raenFoodSTORE</h2>
          </button>
        </Link>
      </div>
      <ul>
        <li>
          <div className="icons-flex">
            <Link style={{ textDecoration: "none", color: "black" }} to="fav">
              <button
                style={{
                  border: "none",
                  background: "none",
                  marginRight: "20px",
                }}
              >
                <i
                  style={{ fontSize: "18px", marginTop: "5px" }}
                  class="fa fa-heart-o"
                  aria-hidden="true"
                ></i>
              </button>
              <p style={{ marginRight: "20px", fontSize: "10px" }}>Wishlist</p>
            </Link>
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
                  style={{ fontSize: "18px", marginTop: "5px" }}
                  class="fa fa-shopping-cart"
                ></i>{" "}
              </button>
            </Badge>
            <p style={{ fontSize: "10px" }}>Cart</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Bottomnav;
