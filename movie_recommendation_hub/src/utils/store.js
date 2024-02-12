import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice.js"
const appstore=configureStore({
    reducer:{
        user:userReducer
    }
})
export default appstore