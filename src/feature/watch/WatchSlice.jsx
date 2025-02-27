import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    second: 0
}

export const watchSlice = createSlice({
    name: 'stopwatch',
    initialState,
    reducers: {

        increment: (state) => {
            state.second=state.second+1
            
        },
        reset: (state) => {
            state.second=0
        },
        
    },
});

// Export actions
export const { increment, reset } = watchSlice.actions;

// Export the reducer correctly
export default watchSlice.reducer;
