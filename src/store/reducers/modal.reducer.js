import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    initialState: {
        isOpen: false
    },
    name: 'modal',
    reducers: {
        toggleModal(state){
            if(state.isOpen === false) state.isOpen = true;
            else state.isOpen = false;
        },
    }
})

export const { toggleModal } = slice.actions
export default slice.reducer;
