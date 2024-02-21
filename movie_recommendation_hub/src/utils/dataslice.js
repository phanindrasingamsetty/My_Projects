import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice({
    name:'data',
    initialState:{
        popular:null,
        nowplaying:null,
        toprated:null,
        upcoming:null,
        wishlist:[],
        suggestionbox:true
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
        },
        chgsuggestionbox:(state,action)=>{
            state.suggestionbox=action.payload
        },
        addtowishlist:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        removefromwishlist:(state,action)=>{
            state.wishlist.splice(action.payload,1)
        }
    }
})

export const{addnowplaying,addpopular,addtoprated,addupcoming,chgsuggestionbox,addtowishlist,removefromwishlist}=dataslice.actions
export default dataslice.reducer