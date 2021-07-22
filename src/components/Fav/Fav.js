import { Button } from "@material-ui/core";
import React from "react";
import Bottomnav from "../Nav/Bottomnav";
import Infav from "./Infav";

const Fav = ({
  fav,
  emprtyFav,
  favitems,
  removefromfav,
  totalItems,
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
        {fav.map((item) => (
          <div>
            <Infav
              key={item.id}
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
            float: "right",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

  return (
    <>
      <Bottomnav totalItems={totalItems} favitems={favitems}></Bottomnav>
      <div>
        <h3 style={{ textAlign: "center", margin: "20px" }}>My Wishlist</h3>
      </div>
      <div className="line"></div>
      <section>
        {!fav.length ? <Emptycart></Emptycart> : <FilledCart></FilledCart>}
      </section>
    </>
  );
};

export default Fav;
