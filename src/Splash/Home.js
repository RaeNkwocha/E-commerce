import React from "react";
import home from "./Imgaes/Home.png";
import { useHistory } from "react-router-dom";
import "./home.css";
import { Button } from "@material-ui/core";

function Home() {
  const history = useHistory();
  const navHandler = () => {
    history.push("/signup");
  };

  return (
    <div
      style={{
        background: "white",
        height: "100vh",
      }}
    >
      <div className="box-shadow">
        <img
          style={{
            width: "100%",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          src="https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img>
        <div className="skew"></div>
        <div style={{ margin: "15px", paddingTop: "10px" }}>
          <h2 style={{ color: "black" }}>Get Your Groceries With Nectar </h2>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#53B175",
              color: "white",
            }}
            onClick={navHandler}
            variant="contained"

            // color="primary"
          >
            <h3 style={{ textTransform: "uppercase" }}> Get Started</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
