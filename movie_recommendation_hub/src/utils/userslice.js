import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:'user',
    initialState:{
        signinstat:false,
        username:null
    },
    reducers:{
        changesigninstat:(state)=>{
            state.signinstat=!state.signinstat
        },
        changeusername:(state,action)=>{
            state.username=action.payload
        }
    }
})
export const {changesigninstat,changeusername}=userslice.actions
export default userslice.reducer
