import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import Bottomnav from "../Nav/Bottomnav";
import Infav from "./Infav";

const Fav = ({
  fav,
  emprtyFav,
  removefromfav,
  totalItems,
  favitems,
  addToBasket,
  products,
}) => {
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
              addToBasket={addToBasket}
              products={products}
            ></Infav>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="icons">
            <h3 style={{ marginTop: "15px", marginLeft: "15px" }}>
              Subtotal: {fav.subtotal.formatted_with_symbol}
            </h3>{" "}
          </div>

          <Button
            style={{ margin: "8px" }}
            variant="contained"
            color="secondary"
            onClick={emprtyFav}
          >
            Empty
          </Button>
        </div>
      </section>
    </>
  );
  if (!fav.line_items)
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <CircularProgress></CircularProgress>
      </div>
    );
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
