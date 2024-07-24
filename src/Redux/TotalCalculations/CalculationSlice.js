import { createSlice } from "@reduxjs/toolkit";

const calculationSlice = createSlice({
    name:"calculation",
    initialState:{
        basePrice:1000,
        colors:0,
        power:{option100:0,option150:200,option200:500},
        warpDrive:{no:0,yes:1000},
        optionPackage:{basic:0, sport:100,lux:500},
        finalCalculation:""
    },

    reducers:{
        calculatedDetails:(state,action)=>{
            return{
                ...state,
                colors:action.payload 
            }
        },
        calculatedcolor:(state,action)=>{
            return{
                ...state,
                colors:action.payload
            }
        }

    }
})

export const {calculatedDetails, calculatedcolor} = calculationSlice.actions
export default calculationSlice.reducer