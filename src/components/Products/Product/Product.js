import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ fruit, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={fruit.image}
        alt={fruit.name}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{fruit.name}</p>
        <p className={styles.details__desc}>{fruit.description}</p>
        <p className={styles.details__price}>$ {fruit.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${fruit.id}`}>
          <button
            onClick={() => loadCurrentItem(fruit)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(fruit.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
