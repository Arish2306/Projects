import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []

}

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {

            state.items = [...state.items, action.payload]

        },

        removeItems: (state, action) => {

        },

        clearItems: (state, action) => {

            state.items.length = 0

        }

    }

})

export const { addItems, removeItems, clearItems } = cartSlice.actions
export default cartSlice.reducer