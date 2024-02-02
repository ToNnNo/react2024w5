import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoListSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
    reducer: {
        todo: todoListSlice,
        cart: cartSlice
    }
})