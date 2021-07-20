import { createSlice } from '@reduxjs/toolkit'

const contador = createSlice({
    name: 'contador',
    initialState: {
        total: 0
    },
    reducers: {
        increment(state) {
            state.total++;
        },
        decrement(state){
            state.total--;
        },
        resetTotalCount(state){
            state.total = 0;
        }
    },
})

export const { increment, decrement, resetTotalCount } = contador.actions;
export default contador.reducer;