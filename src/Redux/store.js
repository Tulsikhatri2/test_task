import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from "./TotalCalculations/CalculationSlice"

const store = configureStore({
    reducer:{
        calculation : calculationReducer
    }
})

export default store