/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate } from 'react-router-dom';
import { useDeleteBookMutation } from '../redux/features/apiSlice';
import { useToast } from '../components/ui/use-toast';
import { useAppSelector } from '../redux/hooks';
import ProductReview from '../components/ProductReview';
import { Button } from '../components/ui/button';
import { IBook } from '../components/types/globalTypes';

interface IProps {
  book: IBook;
}

export default function ProductDetails({book}:IProps) {
  const { email } = useAppSelector(state=> state.user.user)
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deleteBook] = useDeleteBookMutation()
  const {_id, title, author, genre, img, price, rating, reviews, status, dateOfPublication} = book;

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
      navigate(`/editbook/${_id}`)
  }

  return (
    <>
      <div className="lg:flex max-w-7xl mx-auto items-center border-b border-gray-300 space-x-20">
        <div className="w-2/5 mx-auto">
          <img src={img} alt="book"/>
        </div>
        <div className="w-3/5 space-y-2 pb-2">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-xl font-semibold">Author: {author}</p>
          <p className="text-xl">Rating: {rating}</p>
          <p className="text-xl">Genre: {genre}</p>
          <p className="text-xl">Published: {dateOfPublication}</p>
          <p className="text-xl">Price: {price}</p>
          <p className="text-sm flex flex-row">
          Availability: <p className={`ms-2 ${status ? 'text-green-500' : 'text-destructive'}`}>{status ? 'In stock' : 'Out of stock'}</p>
          </p>
        {
          email? <><div className='flex'>
          <Button onClick={handleNavigate}>Edit Book</Button>
          <Button onClick={() => deleteHandle(_id!)} className="ms-2" variant="destructive">Delete Book</Button>
          </div></>: <></>
        }
        </div>
      </div>
      {
        book?.reviews && book?._id && <ProductReview reviews={reviews} bookid={_id}/>
      }
      
    </>
  );
}
