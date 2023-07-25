/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { useGetBookQuery } from "../redux/features/apiSlice";
import ProductDetails from "./ProductDetails";
import { IBook } from "../components/types/globalTypes";

export default function Books() {
  const id:any = useParams();
  const {data, isLoading, isError} = useGetBookQuery(id.id);
  const book:IBook = data?.data!;

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && book) { content = <ProductDetails key={book._id} book={book}/> }

  return (
    <div>
      {
        content
      }
    </div>
  )
}
