import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBook, IUser } from '../../components/types/globalTypes';

export interface PostData {
  id: string
  data: string | number | boolean
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://the-booktown-backend.vercel.app/v1/' }),
  tagTypes: ['Books', 'Book', 'wishBooks'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books']
    }),
    getBook: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ['Book']
    }),
    addBook: builder.mutation({
      query: (data: IBook) => ({
        url: '/books/create-book',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Books']
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Books', 'Book']
    }),
    editBook: builder.mutation<IBook, PostData>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Books', 'Book']
    }),
    addUser: builder.mutation({
      query: (data: IUser) => ({
        url: '/user/create-user',
        method: 'POST',
        body: data
      })
    }),
  }),
})

export const {useGetBooksQuery, useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useEditBookMutation, useAddUserMutation} = api;