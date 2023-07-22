import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1/' }),
  tagTypes: ['Books', 'Book', 'wishBooks'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books']
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['Book']
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: '/books/create-book',
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
      invalidatesTags: ['Books', 'Book']
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Books', 'Book']
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: '/user/create-user',
        method: 'POST',
        body: data
      })
    }),
  }),
})

export const {useGetBooksQuery, useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useEditBookMutation, useAddUserMutation} = api;