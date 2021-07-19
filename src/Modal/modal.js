import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    border: "1px solid lightgrey",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({
  children,
  product,
  addToFav,
  addToBasket,
}) {
  const handleAddtoCart = () => addToFav(product.id, 1);
  const handleAddtoBasket = () => addToBasket(product.id, 1);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div
              style={{
                background: "lightgrey",
                height: "50%",
                borderRadius: "10px",
              }}
            >
              <img
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  padding: "20px",
                }}
                src={product.media.source}
              ></img>
            </div>
            <p style={{ color: "#e75480", margin: "10px" }}>
              ${product.price.formatted}
            </p>
            <p style={{ color: "black", margin: "10px" }}>{product.name}</p>
            <p
              className="desc"
              style={{ margin: "10px", fontSize: "12px", lineHeight: "1.2rem" }}
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>{" "}
            <section
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                color="secondary"
                variant="contained"
                onClick={handleAddtoCart}
                style={{ margin: "15px" }}
              >
                {" "}
                Add to wishlist{" "}
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa fa-heart-o"
                  aria-hidden="true"
                ></i>
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={handleAddtoBasket}
                style={{ margin: "15px" }}
              >
                {" "}
                Add to Cart{" "}
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
              </Button>
            </section>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
