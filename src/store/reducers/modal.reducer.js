import { createSlice } from '@reduxjs/toolkit'

const modal = createSlice({
    name: 'modal',
    initialState: {
        isClosed: true
    },
    reducers: {
        toggleModal(state){
            if(state.isClosed === true) state.isClosed = false;
            else if(state.isClosed === false) state.isClosed = true;
        },
    }
})

export const { toggleModal } = modal.actions
export default modal.reducer;
