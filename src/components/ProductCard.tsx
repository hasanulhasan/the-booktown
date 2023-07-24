/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook, IWishBook } from './types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { useAddWishlistMutation, useGetWishedBooksQuery } from '../redux/features/wishListSlice';

interface IProps {
  book: IBook;
}

export default function ProductCard({ book }: IProps) {
  const {email:userEmail} = useAppSelector(state=> state.user.user)
  const {data} = useGetWishedBooksQuery(null);
  const [addWishlist] = useAddWishlistMutation();
  const wishedBooks:IWishBook[] = data?.data
  const {_id, title, author, genre, img, price, rating, reviews, status, dateOfPublication} = book;


  const handleAddWishlist = async () => {
    const booksTitleCheck = wishedBooks.filter((book: IWishBook) => (book.title === title))
    const booksUserCheck = booksTitleCheck.filter((book: IWishBook) => (book.userEmail === userEmail))
      if(booksUserCheck.length !== 0){
        toast({
          title: 'Book Already Added',
        });
      }
      else{
        await addWishlist({title, author, genre, img, price, rating, reviews, status, dateOfPublication, userEmail , isRead: false})
      toast({
        title: 'Book Added on Wishlist',
      });
      }
  };
  
  return (
    <div>
      <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${book._id}`} className="w-full">
          <img src={book?.img} alt="book" className="max-h-64"/>
        </Link>
        <h3 className='font-semibold'>{book?.title}</h3>
        <p>Author: {book?.author}</p>
        <p>Genre: {book?.genre}</p>
        <p>Price: {book?.price}</p>
        <p>Published: {book?.dateOfPublication}</p>
        {
          userEmail? <>
          <Button variant="default" onClick={handleAddWishlist}>
          Add to Wishlist
        </Button>
          </> : <> </>
        }
      </div>
    </div>
  );
}
