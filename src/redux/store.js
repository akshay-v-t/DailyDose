import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../features/medications/medicationsSlice"
import timingsReducer from "../features/routines/timingsSlice"

const store =configureStore({
    reducer: {
        medications: medicationsReducer,
        timings: timingsReducer,
    },
})

export default store