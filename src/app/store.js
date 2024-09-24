import { configureStore } from '@reduxjs/toolkit';
import cricketReducer from '../features/cricket/cricketSlice'; // Ensure correct path

const store = configureStore({
    reducer: cricketReducer,

});

export default store;
