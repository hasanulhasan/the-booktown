/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ProductCard from '../components/ProductCard';
import { useGetBooksQuery } from '../redux/features/apiSlice';
import { Input } from '../components/ui/input';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { dateSort, priceSort, searchParam, sortType} from '../redux/features/filterSlice';
import Loading from '../components/ui/Loading';
import { IBook } from '../components/types/globalTypes';

export default function Products() {
  const {data, isLoading,isError} = useGetBooksQuery(undefined);
  const books:IBook[] = data?.data
  
  const {search, sort, date, price} = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch();

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && books?.length === 0) content = <p className='text-lg text-destructive'>There is no Book</p>;
  if (!isLoading && !isError && books?.length > 0) {
    content = books.filter((book: IBook) => {
      if (sort === 'Science') {
        return (book.genre === sort)
      }
      else if (sort === 'History') {
        return (book.genre === sort)
      }
      else if (sort === 'Novel') {
        return (book.genre === sort)
      }
      else if (sort === 'Romantic') {
        return (book.genre === sort)
      }
      else if (sort === 'Story') {
        return (book.genre === sort)
      }
      else {
        return book
      }
    }).sort((a, b) => {
      if (price === 'asc') { return (Number(a.price) - Number(b.price)) }
      else if (price === 'dec') { return (Number(b.price) - Number(a.price))  }
      else { return 0 }
    })
    .sort((a, b) => {
      if (date === 'asc') {
        return (Number((a.dateOfPublication).replace(/[^0-9]/g, '')) - Number((b.dateOfPublication).replace(/[^0-9]/g, ''))) }
      else if (date === 'dec') { return (Number((b.dateOfPublication).replace(/[^0-9]/g, '')) - Number((a.dateOfPublication).replace(/[^0-9]/g, ''))) }
      else { return 0 }
    }).filter(book => book.title.toLowerCase().includes(search.toLowerCase())).map(book => <ProductCard key={book._id} book={book} />)}

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 w-full z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start lg:sticky md:sticky top-16 lg:h-[calc(100vh-80px)]">
        <div className="space-y-3 ">
          <h1 className="text-xl uppercase">Search</h1>
          <div className="flex items-center space-x-2 mt-3">
            <Input onChange={(e)=> dispatch(searchParam(e.target.value))} placeholder='Search book'/>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-xl uppercase">Filter by Genre</h1>
        <select onChange={(e)=> dispatch(sortType(e.target.value))} name="filter" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Default</option>
          <option value='Science'>Science</option>
          <option value='History'>History</option>
          <option value='Novel'>Novel</option>
          <option value='Romantic'>Romantic</option>
          <option value='Story'>Story</option>
        </select>
        </div>

        <div className="space-y-3 ">
          <h1 className="text-xl uppercase">Sort by Date</h1>
        <select onChange={(e)=> dispatch(dateSort(e.target.value))} name="sortDate" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Default</option>
          <option value='asc'>Old to New</option>
          <option value='dec'>New to Old</option>
        </select>
        </div>

        <div className="space-y-3 ">
          <h1 className="text-xl uppercase">Sort by Price</h1>
        <select onChange={(e)=> dispatch(priceSort(e.target.value))} name="sortPrice" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Default</option>
          <option value='asc'>High to Low</option>
          <option value='dec'>Low to high</option>
        </select>
        </div>

      </div>
      <div className="col-span-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-20 mx-auto">
        {
         content
        }
      </div>
    </div>
  );
}

