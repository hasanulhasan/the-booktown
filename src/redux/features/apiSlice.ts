/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBook, IUser } from '../../components/types/globalTypes';

interface PostData {
  id: string | undefined
  data: any
}

interface IData {
  success: string;
  data: IBook;
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
    getBook: builder.query<IData, string>({
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