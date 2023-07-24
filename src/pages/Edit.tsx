/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import EditBook from "./EditBook";
import { useGetBookQuery } from "../redux/features/apiSlice";
import Loading from "../components/ui/Loading";
import { IBook } from "../components/types/globalTypes";


export default function Edit() {
  const id:any = useParams();
  const {data, isLoading, isError} = useGetBookQuery(id.id);
  const book:IBook = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && book) { content = <EditBook key={book._id} book={book}/> }

  return (
    <div>
      {
        content
      }
    </div>
  )
}
