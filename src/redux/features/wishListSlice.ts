import { api } from "./apiSlice";


export const wishListSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishedBooks: builder.query({
      query: () => '/wishlist',
      providesTags: ['wishBooks']
    }),
    deleteWishedBook: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['wishBooks']
    }),
    editWishedBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/wishlist/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['wishBooks']
    }),
    addWishlist: builder.mutation({
      query: (data) => ({
        url: '/wishlist',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['wishBooks']
    }),
  })
})

export const { useAddWishlistMutation, useGetWishedBooksQuery, useDeleteWishedBookMutation, useEditWishedBookMutation} = wishListSlice;