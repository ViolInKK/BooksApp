import '.././App.css'
import SearchBox from '.././components/SearchBox'
import Book from '.././components/BookCard'
import Loader from '.././components/Loader'
import Error from '.././components/Error'

import { useAppDispatch, useAppSelector } from '.././app/hooks'
import { fetchBooks } from '.././features/books/bookActionCreators'
import { changeStartIndex } from '.././features/queryParams/queryParamsSlice'


function Catalog() {

  const dispatch = useAppDispatch()
  const {books, isLoading, error, booksFound} = useAppSelector(state => state.books)
  const {startIndex, title, category, maxResults, sortingBy} = useAppSelector(state => state.queryParams)

  return (

    <div className='Catalog'>

      {isLoading ? <Loader/> : null}

      <SearchBox/>
      <p className='booksFound'>Found {booksFound} results</p>

      {error ? <Error/> : 
      <div className='bookCardContainer'>
        {books.map((book, index) => (
          <Book key={index} title={book.title} authors={book.authors} categories={book.categories} imageLinks={book.imageLinks} id={book.id}></Book>
        ))}
      </div>}

      {title && !isLoading && startIndex < booksFound ? 
      <div className='loadMore'>
        <button 
        onClick={() => {
          dispatch(changeStartIndex())
          dispatch(fetchBooks(title, category, sortingBy, startIndex, maxResults))
        }}>Load More 
        </button>
      </div> : null}
      
    </div>
  )
}

export default Catalog
