import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'contador',
    initialState: {
        total: 0,
    },
    reducers: {
        increment(state) {
            state.total++;
        },
        decrement(state){
            state.total--;
        }
    }
})

export const { increment, decrement } = slice.actions;
export default slice.reducer;