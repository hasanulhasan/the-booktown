/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetBookQuery } from '../redux/features/apiSlice';
import { useToast } from '../components/ui/use-toast';
import { useAppSelector } from '../redux/hooks';
import ProductReview from '../components/ProductReview';
import { Button } from '../components/ui/button';

export default function ProductDetails() {
  const {email} = useAppSelector(state=> state.user.user)
  const id:any = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {data} = useGetBookQuery(id.id);
  const book = data?.data;
  const [deleteBook] = useDeleteBookMutation()


  const deleteHandle = async (id:string) => {    
    const checkAgain = window.confirm('Are you sure to delete this book?')
    if(checkAgain){
      try {
        await deleteBook(id);
      } catch (error) {
        console.log(error)
      }
      toast({
        title: 'Book Deleted Successfully',
      });
      navigate('/')
    }
  }

  const handleNavigate = () => {
      navigate(`/editbook/${id.id}`)
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.img} alt="book"/>
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl font-semibold">Author: {book?.author}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Published: {book?.dateOfPublication}</p>
        <p className="text-xl">Price: {book?.price}</p>

        <p className="text-sm flex flex-row">
          Availability: <p className={`ms-2 ${book?.status ? 'text-green-500' : 'text-destructive'}`}>{book?.status ? 'In stock' : 'Out of stock'}</p>
        </p>

        {
          email? <><div className='flex'>
          <Button onClick={handleNavigate}>Edit Book</Button>
          <Button onClick={() => deleteHandle(id.id)} className="ms-2" variant="destructive">Delete Book</Button>
          </div></>: <></>
        }
        </div>
      </div>
      {
        book?.reviews? <ProductReview reviews={book?.reviews} bookid={book._id}/> : null
      }
      
    </>
  );
}
