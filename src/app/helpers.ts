import { Book } from "../models/Book"

export function removeHTMLTags(text: string | undefined){
    if((text === undefined) || (text === '')){
      return false
    }
    return text.replace( /(<([^>]+)>)/ig, '')
  }

  export function tripResponseData(book: any): Book{
    return {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        categories: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        imageLinks: book.volumeInfo.imageLinks,
        previewLink: book.volumeInfo.previewLink,
        id: book.id
    }
  }

