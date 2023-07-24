import { IWishBook } from "../../components/types/globalTypes";
import { PostData, api } from "./apiSlice";

interface IEdit {
  id: string;
  data: any;
}

export const wishListSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishedBooks: builder.query({
      query: () => '/wishlist',
      providesTags: ['wishBooks']
    }),
    deleteWishedBook: builder.mutation<IWishBook,string>({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['wishBooks']
    }),
    editWishedBook: builder.mutation<IWishBook, PostData>({
      query: ({ id, data }) => ({
        url: `/wishlist/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['wishBooks']
    }),
    addWishlist: builder.mutation({
      query: (data:IWishBook) => ({
        url: '/wishlist/create-wishlist',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['wishBooks']
    }),
  })
})

export const { useAddWishlistMutation, useGetWishedBooksQuery, useDeleteWishedBookMutation, useEditWishedBookMutation} = wishListSlice;