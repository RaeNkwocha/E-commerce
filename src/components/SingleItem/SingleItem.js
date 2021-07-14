import React, { useContext, useState } from "react";
import "../../Component css/items.css"
import { connect } from "react-redux";
import heart from "../SingleItem/image/Vector (6).png"

import group from "../SingleItem/image/Group 102.png"
import { CartContext } from "../../Context/Context";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { FavContext } from "../../Context/Favcontext";

const SingleItem = ({ current,  }) => {
  const [value,setValue]=useState(1)
  const [fav, setFav] = useContext(FavContext);

 
  const addToCart=(product)=>{
    setFav([...fav,{...product}])
  }


  return (
    
    <div style={{marginBottom:"70px"}}>
<div className="img-holder">
<img src={current.image}></img>
</div>
<div className="img-flex">
        <div><h3> {current.name}</h3></div>
        <img alt=""onClick={() => addToCart(current)} src={heart}></img>
</div>
<p className="desc-two"> {current.description}</p>
    <div className="img-flex">
        <div className="new-counter">
                <div ><i class="fa fa-minus"></i></div>
                <div className="counter-holder">{value}</div>
                <div onClick={()=>setValue(value+1)} ><i class="fa fa-plus"></i></div>
        </div>
        <div>
        <h2> {current.price}</h2>

        </div>
    </div>
    <section>
        <div className="divide"></div>
        <div className="img-flex">
            <h4 style={{marginLeft:"5px"}}>Product detail</h4>
            <i class="fa fa-chevron-down"></i>

        </div>
        <p className="detail">Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</p>
    </section>
    <section>
    <div className="divide"></div>
        <div className="img-flex">
            <h4 style={{marginLeft:"5px"}}>Nutritious</h4>
            <div className="new-counter">
            <img  src={group}></img>
            <i class="fa fa-chevron-right"></i>
            </div>
           
        </div>
    </section>
    <section>
    <div className="divide"></div>
        <div className="img-flex">
            <h4 style={{marginLeft:"5px"}}>Reviews</h4>
            <div className="new-counter">
            <img  src={group}></img>
            <i class="fa fa-chevron-right"></i>                 
                   </div>
           
        </div>
        <button className="button"><h3 style={{display:"flex",margin:"auto",color:"white"}}>Add To Basket</h3></button>
    </section>
   
</div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);

