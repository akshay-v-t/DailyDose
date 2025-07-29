import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  wakeTime: '',
  sleepTime: '',
  breakfastTime: '',
  lunchTime: '',
  dinnerTime: ''
};


const timingSlice = createSlice({
    name: 'timings',
    initialState,
    reducers:{
        setTimings:(state, action)=>{
            return{...state, ...action.payload}
        }
    }
})


export const {setTimings} = timingSlice.actions;
export default timingSlice.reducer;