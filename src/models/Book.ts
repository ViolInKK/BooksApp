export interface Book{
    title: string 
    authors: string[] | undefined
    categories: string[] | undefined
    description: string | undefined
    imageLinks: {
        smallThumbnail: string | undefined
        thumbnail: string | undefined
        medium: string | undefined
        small: string | undefined
    }
    previewLink: string | undefined
    id: string
}