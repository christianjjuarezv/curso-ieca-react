import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addToChat: (state, action) => {
            state.push(action.payload);
        },
        removeFromChat: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const { addToChat, removeFromChat } = chatSlice.actions;

export default chatSlice.reducer;