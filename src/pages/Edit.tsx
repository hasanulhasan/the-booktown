import { useParams } from "react-router-dom";
import EditBook from "./EditBook";
import { useGetBookQuery } from "../redux/features/apiSlice";
import Loading from "../components/ui/loading";

export default function Edit() {
  const { id } = useParams();
  const {data, isLoading, isError, error} = useGetBookQuery(id);
  let book = data?.data

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
