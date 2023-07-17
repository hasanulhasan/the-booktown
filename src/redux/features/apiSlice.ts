// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books'
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`
    })
    
  }),
})

export const {useGetBooksQuery, useGetBookQuery} = api;