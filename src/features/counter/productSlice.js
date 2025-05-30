import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    //sate = initialState
    //action = redux toolkit values (product's values)
    addtoCart: (state, action) => {

      let findIndexId = state.value.findIndex((item)=>{
        return item._id === action.payload._id;
      })
      console.log(findIndexId);
      
      if(findIndexId >= 0){
        // user same product 2 or 3...6 bar judi cart a add kore tahole oi product er quantity protibar  +1 kore barte thakbe 'quantity: 6'
        state.value[findIndexId].quantity +=1;
      }else{
        // adding 'quantity' to our product
        state.value.push({...action.payload , quantity: 1});
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtoCart } = ProductSlice.actions

export default ProductSlice.reducer