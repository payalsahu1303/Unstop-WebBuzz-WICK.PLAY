import { createSlice } from "@reduxjs/toolkit";
import upcomingMatchs from './data'
const initialState = {
    name: "Dipak Mundhe",
    upcomingMatchs,
    profile: [],
    livematch: [],
}

const cricketSlice = createSlice({
    name: 'cricket',
    initialState,
    reducers: {
        addData: (state, action) => {
            const data = action.payload;
            state.profile.push(data);
        },
        liveMatch: (state, action) => {
            state.livematch = [];
            state.livematch.push(action.payload)
        }
    }
});

export default cricketSlice.reducer;
export const { addData,liveMatch } = cricketSlice.actions;  
