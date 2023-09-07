import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'

import { store } from './app/store.ts'
import Book from './views/Book.tsx'
import Catalog from './views/Catalog.tsx'

const router = createHashRouter([
  {
    path: "/*",
    element: <Catalog/>
  },
  {
    path: "/book/:bookId",
    element: <Book/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
  ,
)
