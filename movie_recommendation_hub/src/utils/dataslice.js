import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice({
    name:'data',
    initialState:{
        popular:null,
        nowplaying:null,
        toprated:null,
        upcoming:null
    },
    reducers:{
        addpopular:(state,action)=>{
            state.popular=action.payload
        },
        addnowplaying:(state,action)=>{
            state.nowplaying=action.payload
        },
        addtoprated:(state,action)=>{
            state.toprated=action.payload
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload
        }
    }
})

export const{addnowplaying,addpopular,addtoprated,addupcoming}=dataslice.actions
export default dataslice.reducer