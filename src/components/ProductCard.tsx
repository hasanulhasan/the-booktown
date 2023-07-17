import { IBook } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface IProps {
  product: IBook;
}

export default function ProductCard({ book }: IProps) {

  const handleAddProduct = (book: IBook) => {
    toast({
      description: 'Product Added',
    });
  };
  
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${book.id}`} className="w-full">
          <img src={book?.img} alt="book" className="max-h-64"/>
          <h1 className="text-xl font-semibold">{book?.name}</h1>
        </Link>
        <h3 className='font-semibold'>{book?.title}</h3>
        <p>Author: {book?.author}</p>
        <p>Rating: {book?.rating}</p>
        <p>Price: {book?.price}</p>
        {/* <p className="text-sm">
          Availability: {product?.status ? 'In stock' : 'Out of stock'}
        </p> */}
        <Button variant="default" onClick={() => handleAddProduct(book)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}