/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import banner from '../assets/images/bookBanner.png';
import hero from '../assets/images/hero3.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useGetBooksQuery } from '../redux/features/apiSlice';
import ProductCard from '../components/ProductCard';
import Loading from '../components/ui/Loading';
import { IBook } from '../components/types/globalTypes';

export default function Home() {
  const {data, isLoading,isError, error} = useGetBooksQuery(undefined);
  const books:IBook[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && books?.length === 0) content = <p className='text-lg text-destructive'>There is no Book</p>;
  if (!isLoading && !isError && books?.length > 0) {
    content = books.map(book => <ProductCard key={book._id} book={book} />)}

  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            DIVE TO<br /> SEA OF KNOWLEDGE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Choice your best one without any hassle
          </p>
          <div className="text-primary mt-20">
            <p>“Reality doesn’t always give us the life that we desire,<br/> 
            but we can always find what we desire between the pages of books.”<br/>
            ―Adelise M. Cullens</p>
          </div>
          <Button className="mt-5"><Link to="/products">Let's explore</Link></Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-72">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            Buy book make future
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all books</Link>
          </Button>
        </div>
      </div>
      <h1 className="text-5xl font-black text-primary uppercase mt-10 text-center mb-8">
            Our latest collection
          </h1>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
        <div className="col-span-12 grid lg:grid-cols-4 grid-cols-1 gap-10 pb-20">
        {
         content
        }
      </div>
      </div>

    </>
  );
}
