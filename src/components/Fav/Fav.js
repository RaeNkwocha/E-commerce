import { Button } from "@material-ui/core";
import React from "react";
import Bottomnav from "../Nav/Bottomnav";
import Infav from "./Infav";

const Fav = ({ fav, emprtyFav, removefromfav, totalItems, favitems }) => {
  const Emptycart = () => (
    <>
      <h3
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        There are no items in your wishlist{" "}
      </h3>
    </>
  );
  const FilledCart = () => (
    <>
      <section>
        {fav.line_items.map((item) => (
          <div>
            <Infav
              item={item}
              removefromfav={removefromfav}
              emprtyFav={emprtyFav}
            ></Infav>
          </div>
        ))}
        <div className="navbar">
          <div className="icons">
            <h3 style={{ marginTop: "15px", marginLeft: "15px" }}>
              Subtotal: {fav.subtotal.formatted_with_symbol}
            </h3>{" "}
          </div>
          <ul>
            <li>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                color="secondary"
                onClick={emprtyFav}
              >
                Empty
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
  if (!fav.line_items) return "Loading...";
  return (
    <>
      <Bottomnav totalItems={totalItems} favitems={favitems}></Bottomnav>
      <div>
        <h3 style={{ textAlign: "center", margin: "20px" }}>My Wishlist</h3>
      </div>
      <div className="line"></div>
      <section>
        {!fav.line_items.length ? (
          <Emptycart></Emptycart>
        ) : (
          <FilledCart></FilledCart>
        )}
      </section>
    </>
  );
};

export default Fav;
