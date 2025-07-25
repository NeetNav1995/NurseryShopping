import {createSlice} from "@reduxjs/toolkit";

const authSlicer=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
    },
    reducers:{
        Login:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
        },
        Logout:(state,action)=>{
            state.user=null;
            state.isAuthenticated=false;
        }
    }
})

export const {Login,Logout}=authSlicer.actions;
export default authSlicer.reducer;