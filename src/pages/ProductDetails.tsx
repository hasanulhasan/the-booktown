import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { IBook } from '@/types/globalTypes';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetBookQuery } from '../redux/features/apiSlice';
import { useToast } from '../components/ui/use-toast';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {data: book, isLoading, error} = useGetBookQuery(id);
  const [deleteBook] = useDeleteBookMutation()


  const deleteHandle = (id) => {
    alert('Are you sure to delete this book?')
    deleteBook(id);
    toast({
      description: 'Book Deleted Successfully',
    });
    navigate('/')
  }

  const handleNavigate = () => {
      navigate(`/editbook/${id}`)
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.img} alt=""/>
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl font-semibold">Author: {book?.author}</p>
          <p className="text-xl">Rating: {book?.rating}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Published: {book?.dateOfPublication}</p>
        <p>Price: {book?.price}</p>
        <p className="text-sm">
          Availability: {book?.status ? 'In stock' : 'Out of stock'}
        </p>
          {/* <ul className="space-y-1 text-lg">
            {book?.features?.map((feature) => (
              <li key={id}>{feature}</li>
            ))}
          </ul> */}
          <div className='flex'>
          <Button onClick={handleNavigate}>Edit Book</Button>
          <Button onClick={() => deleteHandle(id)} className="ms-2" variant="destructive">Delete Book</Button>
          </div>
        </div>
      </div>
      {
        book?.reviews? <ProductReview reviews={book?.reviews} bookid={book.id}/> : null
      }
      
    </>
  );
}
