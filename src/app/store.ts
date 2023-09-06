import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/booksSlice'
import queryParamsReducer from '../features/queryParams/queryParamsSlice';
import { booksApiSlice } from '../features/books/booksApiSlice';

export const store = configureStore({
    reducer: {
        books: bookReducer,
        queryParams: queryParamsReducer,
        [booksApiSlice.reducerPath]: booksApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(booksApiSlice.middleware)
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>