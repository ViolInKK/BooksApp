import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/';
import { Book } from '../../models/Book';
import { tripResponseData } from '../../app/helpers';

const API_LINK = `https://www.googleapis.com/books/v1/volumes`

export const booksApiSlice = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_LINK,
    }),
    endpoints(builder) {
        return {
            fetchBook: builder.query<Book, string | void>({
                query(id){
                    return `/${id}`
                },
                transformResponse: (bookApiResponse: any): Book => {
                    return tripResponseData(bookApiResponse)
                }
            }),
        }
    }
})

export const { useFetchBookQuery } = booksApiSlice
