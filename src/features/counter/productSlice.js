import { createSlice } from "@reduxjs/toolkit";
import { toastSuccess, toastError } from "../../component/utility/Toastify.jsx";
const initialState = {
  value: localStorage.getItem("cart")
    ? //localStorage.getItem => local storage er store kora value use kora jabe redux a ja reload korar por chole jabe na
      //JSON.parse() er kaj holo localStroage er string value gulo ke object a convert kore
      JSON.parse(localStorage.getItem("cart"))
    : [],
  totalAmount: 0,
  totalItem: 0,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //sate = initialState
    //action = redux toolkit values (product's values)
    addtoCart: (state, action) => {
      // action.playload => we can see cart's all values
      let findIndexId = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (findIndexId >= 0) {
        // user same product 2 or 3...6 bar judi cart a add kore tahole oi product er quantity protibar  +1 kore barte thakbe 'quantity: 6'
        state.value[findIndexId].quantity += 1;
        toastSuccess(`${action.payload.name} again added to cart`);
        //JSON.stringify er kaj holo cart er object value ke string a convert kore
        //localStorage.setItem => local storage a value set korte use hoy
        localStorage.setItem("cart", JSON.stringify(state.value));
      } else {
        // adding 'quantity' to our product
        state.value.push({ ...action.payload, quantity: 1 });
        toastSuccess(`${action.payload.name} is add to cart`);
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    removeCartItem: (state, action) => {
      //class video node-17 time: 1:10:00
      const reduceItem = state.value.filter((item) => {
        //je item ta remvoe korbo sei item chara redux er baki item gulo return hobe
        return item._id !== action.payload._id;
      });

      state.value = reduceItem;
      toastError(`${action.payload.name} is remove from cart`);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incrementAmount: (state, action) => {
      let findIndexid = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      state.value[findIndexid].quantity += 1;
      toastSuccess(`${action.payload.name} again added to cart`);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementAmount: (state,action) => {
      let findIndexId = state.value.findIndex((item)=>{
        return item._id === action.payload._id
      });
      if(state.value[findIndexId].quantity > 1){
        state.value[findIndexId].quantity -= 1
        toastSuccess(`${action.payload.name} is remove from cart`);
        localStorage.setItem("cart", JSON.stringify(state.value));
      }

    },
    getTotal: (state, action) => {
      const reduceArray = state.value.reduce(
        (initialvalue, item) => {
          const { price, quantity } = item;
          initialvalue.amount += price * quantity;
          initialvalue.item += quantity;
          return initialvalue;
        },
        { amount: 0, item: 0 }
      );
      const {amount,item} = reduceArray;
      state.totalAmount = amount;
      state.totalItem = item;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCartItem, incrementAmount, decrementAmount, getTotal } =
  ProductSlice.actions;

export default ProductSlice.reducer;
