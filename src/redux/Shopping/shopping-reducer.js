import * as actionTypes from "./shopping-types";
import Bannas from "../../components/Products/shopImage/bannas.png"
import Apples from "../../components/Products/shopImage/apple.png"
import berry from "../../components/Products/shopImage/strawberry.png"
import Nuts from "../../components/Products/shopImage/cashew.png"
import bone from "../../components/Products/shopImage/bone.png"
import chicken from "../../components/Products/shopImage/chicken.png"

const INITIAL_STATE = {
  products:[ {
    id: 1,
    name: "Organic Bannas",
    image: Bannas,
    price: "$4.99",
    description: "7pcs priceg",
    inCart: false,
  },
  {
    id: 2,
    name: "Red Apple",
    image: Apples,
    price: "$4.99",
    description: "7pcs priceg", 
    inCart: false,
  },
  {
    id: 3,
    name: "Red Apple",
    image: Apples,
    price: "$4.99",
    description: "7pcs priceg",
    inCart: false,
  }, 
  {
    id: 4,
    name: "Red Apple",
    image: Apples,
    price: "$4.99",
    description: "7pcs priceg",
    inCart: false,
  },],
  newProducts:[
    {
        id: 5,
        name: "Strawberries",
        image: berry,
        price: "$4.99",
        inCart: false,
  
        description: "7pcs priceg",
      },
      {
        id: 6,
        name: "Cashew Nuts",
        image: Nuts,
        price: "$4.99",
        inCart: false,
  
        description: "7pcs priceg",
      },
      {
        id: 7,
        name: "Tomatoes",
        image: Bannas,
        price: "$4.99",
        inCart: false,
  
        description: "7pcs priceg",
      },
      {
        id: 8,
        name: "Pear",
        image: Bannas,
        price: "$4.99",
        inCart: false,
  
        description: "7pcs priceg",
      },
  ],
  gorceries:[
    {
        id: 9,
        name: "Beef bone",
        image: bone,
        price: "$4.99",
        inCart: false,
        description: "7pcs priceg",
      },
      {
        id: 10,
        name: "Broiller chicken",
        image: chicken,
        price: "$4.99",
        inCart: false,
        description: "7pcs priceg",
      },
      {
        id: 11,
        name: "Strawberries",
        image: berry,
        price: "$4.99",
        inCart: false,
        
        description: "7pcs priceg",
      },
      {
        id: 12,
        name: "Strawberries",
        image: berry,
        price: "$4.99",
        inCart: false,
        description: "7pcs priceg",
      },
      
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
