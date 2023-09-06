import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

interface BooksState {
    books: Book[],
    booksFound: number,
    isLoading: boolean,
    error: string
}

const initialState: BooksState = {
    books: [],
    booksFound: 0,
    isLoading: false,
    error: ''
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksFetching(state){
            state.isLoading = true
        },
        changeTotalBooksFound(state, action: PayloadAction<number>){
            state.booksFound = action.payload
        },
        booksFetcinghMoreSuccess(state, action: PayloadAction<Book[]>){
            state.isLoading = false
            state.error = ''
            state.books = [...state.books, ...action.payload]
        },
        booksFetchingSuccess(state, action: PayloadAction<Book[]>){
            state.isLoading = false
            state.error = ''
            state.books = action.payload
            
        },
        booksFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false,
            state.booksFound = 0
            state.error = action.payload
        }
    },
})

export const { booksFetching, booksFetchingError, booksFetchingSuccess, changeTotalBooksFound } = booksSlice.actions
export default booksSlice.reducer