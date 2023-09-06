import { FC } from "react"
import { Link } from "react-router-dom"

interface BookProps{
    title: string,
    authors: string[] | undefined,
    categories: string[] | undefined,
    imageLinks: {
        smallThumbnail: string | undefined
        thumbnail: string | undefined
    },
    id: string
}

const BookCard: FC<BookProps> =  ({title, authors, categories, imageLinks, id}) => {
  return (
    <Link to={`/book/${id}`} className="bookCard">
      <div>
          <img src={imageLinks?.smallThumbnail} alt={''}></img>
          <p title={`${categories}`} className="category">{categories}</p>
          <p title={`${title}`} className="title">{title}</p>
          <p title={`${authors}`} className="authors">{authors}</p>
      </div>
    </Link>        
  )
}

export default BookCard