import React, { useEffect, useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import Bottomnav from "../components/Nav/Bottomnav";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import Address from "./checkoutform/Address";
import Payment from "./checkoutform/Payment";
import { commerce } from "../lib/commerce";

const Checkout = ({ cart }) => {
  const classes = useStyles();

  const history = useHistory();

  const steps = ["Shipping address", "Payment details"];
  const [activestep, setActivestep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activestep !== steps.length) history.push("/");
        }
      };

      generateToken();
    }
  }, [cart]);

  const Confirmation = () => <>confirmation</>;
  const Form = () =>
    activestep === 0 ? (
      <Address checkoutToken={checkoutToken}></Address>
    ) : (
      <Payment></Payment>
    );
  return (
    <>
      <Bottomnav></Bottomnav>
      <main className={classes.layout} style={{ marginTop: "100px" }}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            checkout
          </Typography>
          <Stepper activeStep={activestep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activestep === steps.length ? (
            <Confirmation></Confirmation>
          ) : (
            checkoutToken && <Form></Form>
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
