import { FC, useState } from 'react'

import { SelectOptions } from './SelectOptions'

import { useAppDispatch } from '../app/hooks'
import { fetchBooks } from '../features/books/bookActionCreators'
import { changeQueryParams } from '../features/queryParams/queryParamsSlice'

const SearchBox: FC = () => {
    
    const dispatch = useAppDispatch()

    const categoriesOption = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortingBy = ['relevance', 'newest']

    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('all')
    const [sortOption, setSortOption] = useState<string>('relevance')

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        dispatch(changeQueryParams({title, category, sortOption}))
        dispatch(fetchBooks(title, category, sortOption))
    }

    return ( 
    <div className='searchBoxContainer'>
          <form onSubmit={handleSubmit}>

            <div className='titleInput'>
              <input placeholder='Search for book' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>

            <div className='searchOptions'>
              <div className='categorySearchOption'>
                <p>Categories</p>
                <SelectOptions selectOptions={categoriesOption} setter={setCategory}/>
              </div>

              <div className='sortSearchOption'>
                <p>Sorting By</p>
                <SelectOptions selectOptions={sortingBy} setter={setSortOption}/>
              </div>
            </div>

          </form>
      </div>
    )
  }
  
  export default SearchBox
