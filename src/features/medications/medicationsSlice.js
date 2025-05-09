import { createSlice } from "@reduxjs/toolkit";

const savedMedications = JSON.parse(localStorage.getItem('medications'))  || []

const initialState = {
    list: savedMedications,
};



const medicationsSlice = createSlice({
    name: 'medications',
    initialState,
    reducers: {
        addMedication: (state, action)=>{
            state.list.push(action.payload);
        },
        deleteMedication: (state, action)=>{
            state.list = state.list.filter(med=> med.id!=action.payload)
        },
        toggleTaken: (state, action)=>{
            const med = state.list.find(m=>m.id === action.payload);
            if(med){
                med.taken = !med.taken;
            }
        },

            setMedication: (state,action)=>{
                state.list = action.payload
            }
        
    }
});

export const { addMedication, deleteMedication, toggleTaken, setMedication} = medicationsSlice.actions;
export default medicationsSlice.reducer;