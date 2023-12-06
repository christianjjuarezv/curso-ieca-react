import {configureStore} from '@reduxjs/toolkit';
import messageChat from './chatSlice';

export const store = configureStore({
    reducer: {
        chat: messageChat
    }
})