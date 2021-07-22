import React, { useState, createContext } from "react";
export const CartContext = createContext();
export const Context = (props) => {
  const [fav, setFav] = useState([]);
  return (
    <CartContext.Provider value={[fav, setFav]}>
      {props.children}
    </CartContext.Provider>
  );
};
