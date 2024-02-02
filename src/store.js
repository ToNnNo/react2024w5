import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoListSlice";

export default configureStore({
    reducer: {
        todo: todoListSlice
    }
})