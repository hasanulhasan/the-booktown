import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/types/globalTypes';
import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../redux/features/apiSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const {data: book, isLoading, error} = useGetBookQuery(id);

  // //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // const product = data?.find((item) => item._id === Number(id));

  // //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.img} alt="" />
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
          <ul className="space-y-1 text-lg">
            {book?.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button>Add to cart</Button>
        </div>
      </div>
      {/* <ProductReview /> */}
    </>
  );
}
