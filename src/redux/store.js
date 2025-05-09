import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../features/medications/medicationsSlice"

const store =configureStore({
    reducer: {
        medications: medicationsReducer,
    },
})

export default store