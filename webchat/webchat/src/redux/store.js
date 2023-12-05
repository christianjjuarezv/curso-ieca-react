import {configureStore} from '@reduxjs/toolkit';
import messageChat from './messageChat';

export const store = configureStore({
    reducer: {
        chat: messageChat
    }
})