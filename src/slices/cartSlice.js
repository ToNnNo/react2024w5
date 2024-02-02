import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        add: (state, action) => {
            state.cart.push( action.payload.product ); 
        }
    }
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;