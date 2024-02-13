import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice.js"
import dataReducer from "./dataslice.js"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        data:dataReducer
    }
})
export default appstore