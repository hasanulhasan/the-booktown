import { useParams } from "react-router-dom";
import EditBook from "./EditBook";
import { useGetBookQuery } from "../redux/features/apiSlice";

export default function Edit() {
  const { id } = useParams();
  const {data: book, isLoading, isError, error} = useGetBookQuery(id);

  let content = null;
  if (isLoading) content = <p className='text-lg text-destructive'>Loading...</p>;
  if (!isLoading && isError) content = <p className='text-lg text-destructive'>There was an error</p>;
  if (!isLoading && !isError && book) { content = <EditBook key={book.id} book={book}/> }

  return (
    <div>
      {
        content
      }
    </div>
  )
}
