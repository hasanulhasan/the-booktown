// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books']
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Books']
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Books']
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Books']
    })
    
  }),
})

export const {useGetBooksQuery, useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useEditBookMutation} = api;