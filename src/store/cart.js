import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action) =>{
            const item = state.cartItem.find((item)=> item.id === action.payload.id)

            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.cartItem.push(action.payload)
            }
        },

        pluse:(state,action) =>{
            const item = state.cartItem.find((item)=> item.id === action.payload.id)

            if(item){
                item.quantity ++
            }
        },

        minus:(state,action) =>{
            const item = state.cartItem.find((item)=> item.id === action.payload.id)

            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity --
            }
        },

        deletes:(state,action)=>{
            state.cartItem = state.cartItem.filter((item)=> item.id !== action.payload)
        }
    }
})


export const {addCart , pluse, minus, deletes} = cartSlice.actions
export default cartSlice