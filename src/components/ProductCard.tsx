import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const handleAddProduct = (product: IProduct) => {
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product.id}`} className="w-full">
          <img src={product?.img} alt="product" className="max-h-64"/>
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>
        <h3 className='font-semibold'>{product?.title}</h3>
        <p>Author: {product?.author}</p>
        <p>Rating: {product?.rating}</p>
        <p>Price: {product?.price}</p>
        {/* <p className="text-sm">
          Availability: {product?.status ? 'In stock' : 'Out of stock'}
        </p> */}
        <Button variant="default" onClick={() => handleAddProduct(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

// author
// : 
// "Mick Herron"
// dateOfPublication
// : 
// "23/05/2002"
// featured
// : 
// false
// genre
// : 
// "Science"
// id
// : 
// 1
// price
// : 
// "190"
// rating
// : 
// 3
// thumbnail
// : 
// "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
// title
// : 
// "Slow Horses (Deluxe Edition)"