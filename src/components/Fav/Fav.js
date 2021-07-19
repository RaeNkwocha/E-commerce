import React from "react";
import Infav from "./Infav";

const Fav = ({ fav, emprtyFav, removefromfav }) => {
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
      </section>
    </>
  );
  if (!fav.line_items) return "Loading...";
  return (
    <>
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
      <button onClick={emprtyFav}>Empty</button>
      <h2>Subtotal: {fav.subtotal.formatted_with_symbol}</h2>{" "}
    </>
  );
};

export default Fav;
