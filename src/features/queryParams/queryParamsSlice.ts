import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface queryParams {
    title: string | null,
    category: string,
    sortingBy: string,
    startIndex: number,
    maxResults: number

}

const initialState: queryParams = {
    title: null,
    category: 'all',
    sortingBy: 'relevance',
    startIndex: 30,
    maxResults: 30,
}

interface changeQueryParamsPayload{
    title: string,
    category: string,
    sortOption: string,
}

const queryParamsSlice = createSlice({
    name: 'queryParams',
    initialState,
    reducers: {
        changeQueryParams(state, action: PayloadAction<changeQueryParamsPayload>){
            state.title = action.payload.title
            state.category = action.payload.category
            state.sortingBy = action.payload.sortOption
            state.startIndex = 30
        },
        changeTitle(state, action: PayloadAction<string>){
            state.title = action.payload
            state.startIndex = 30
        },
        changeStartIndex(state){
            state.startIndex += 30
        },

    }
})

export const { changeTitle, changeStartIndex, changeQueryParams } = queryParamsSlice.actions
export default queryParamsSlice.reducer
