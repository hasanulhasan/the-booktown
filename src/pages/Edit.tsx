import { useParams } from "react-router-dom";
import EditBook from "./EditBook";
import { useGetBookQuery } from "../redux/features/apiSlice";
import Loading from "../components/ui/loading";
import { IBook } from "../components/types/globalTypes";

export default function Edit() {
  const { id } = useParams();
  const {data, isLoading, isError, error} = useGetBookQuery(id);
  const book:IBook[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>{error}</p>;
  if (!isLoading && !isError && book) { content = <EditBook key={book._id} book={book}/> }

  return (
    <div>
      {
        content
      }
    </div>
  )
}
