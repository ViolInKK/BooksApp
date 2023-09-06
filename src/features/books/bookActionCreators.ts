import axios from "axios";
import { AppDispatch } from "../../app/store";
import { tripResponseData } from "../../app/helpers";

const API_KEY = import.meta.env.VITE_API_KEY
const API_LINK = `https://www.googleapis.com/books/v1/volumes`

export const fetchBooks = (title: string, category: string = 'all', orderBy: string = 'relevance', startIndex: number = 0, maxResults: number = 30) => async (dispatch: AppDispatch) => {
    
        dispatch({type: 'books/booksFetching'})

        //Add better error handeling. Couldnt connect to api server and no books found dispatch same error atm
        //Maybe add seperate function for loadMore
        //Sometimes unable to fetchMore even if total amount of books found allows to
        try{
        const response = await axios.get(API_LINK, {params: {
            q: `${title}+subject:${category == 'all' ? '' : category}`,
            key: API_KEY,
            maxResults: maxResults,
            startIndex: startIndex,
            orderBy: orderBy
        }})

        const totalBooks = response.data.totalItems
        const books = await response.data.items.map((bookApiResponse: any) => {
            return tripResponseData(bookApiResponse)
        })

        if(startIndex){
            dispatch({type: 'books/booksFetcinghMoreSuccess', payload: books})
        } 
        else{
            dispatch({type: 'books/changeTotalBooksFound', payload: totalBooks})
            dispatch({type: 'books/booksFetchingSuccess', payload: books})
        }
    }
        
    
    catch (e) {
        dispatch({type: 'books/booksFetchingError', payload: 'Couldnt fetch data'})
    }
}
