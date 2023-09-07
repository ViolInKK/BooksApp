import { FC } from "react"
import { useParams } from "react-router-dom"

import Loader from "../components/Loader"
import Error from "../components/Error"

import { useFetchBookQuery } from "../features/books/booksApiSlice"
import { removeHTMLTags } from "../app/helpers"


export const Book: FC = () => {

    const { bookId } = useParams()    
    const { data, isFetching, error } = useFetchBookQuery(bookId)

  return (
    <div className="Book">
        {error ? <Error/> : null}

        {isFetching ? <Loader/> : data ? 

        <div className="bookContentContainer">

          <div className="bookContentImg">
             <img src={data.imageLinks != undefined ?  data.imageLinks.medium || data.imageLinks.small || data.imageLinks.thumbnail : ''}></img>
          </div>

          <div className="bookContent">

            <div className="bookContentCategories">
              <p>{data.categories ? data.categories[0] : 'No categories'}</p>
            </div>

            <div className="bookContentTitle">
              <p>{data.title}</p>
            </div>

            <div className="bookContentAuthors">
              <p>{data.authors ? data.authors[0] : 'No authors'}</p>
            </div>

            <div className="bookContentDescription">
              <p>{data.description ? removeHTMLTags(data.description) : 'No description'}</p>
            </div>

          </div>
        </div> 
        : null}
    </div>
  )
}

export default Book