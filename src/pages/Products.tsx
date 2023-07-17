// import ProductCard from '@/components/ProductCard';
// import { Label } from '@/components/ui/label';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
import { useToast } from '../components/ui/use-toast';
// import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { IBook } from '../components/types/globalTypes';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import ProductCard from '../components/ProductCard';
import { useGetBooksQuery } from '../redux/features/apiSlice';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { searchParam, sortType } from '../redux/features/filterSlice';

export default function Products() {
  const {data: books, isLoading, error} = useGetBooksQuery(undefined);
  const dispatch = useAppDispatch();

  // const [data, setData] = useState<IBook[]>([]);
  
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // console.log(data)
  const { toast } = useToast();

  //! Dummy Data

  // const status = true;
  // const priceRange = 100;

  // //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

  // let productsData;

  // if (status) {
  //   productsData = data.filter(
  //     (item) => item.status === true && item.price < priceRange
  //   );
  // } else if (priceRange > 0) {
  //   productsData = data.filter((item) => item.price < priceRange);
  // } else {
  //   productsData = data;
  // }

  // const handleSearch = (text) => {
  //   console.log(text)
  // }
  // const handleSelect = (e) => {
  //     console.log(e)
  // }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Search</h1>
          <div className="flex items-center space-x-2 mt-3">
            <Input onChange={(e)=> dispatch(searchParam(e.target.value))} placeholder='Search book'/>
            {/* <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label> */}
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Filter</h1>

        {/* <Select onValueChange={(e)=> console.log(e.target.value)}>
          <SelectTrigger>
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Genre</SelectItem>
            <SelectItem value="1">High to low</SelectItem>
            <SelectItem value="3">Low to high</SelectItem>
            <SelectItem value="7">date</SelectItem>
          </SelectContent>
        </Select> */}

        <select onChange={(e)=> dispatch(sortType(e.target.value))} name="sort" className="outline w-full rounded">
          <option value='default'>Default</option>
          <option value='genreAtoZ'>Genre A to Z</option>
          <option value='genreZtoA'>Genre Z to A</option>
          <option value='publishNew'>Published new to old</option>
          <option value='publishOld'>Published old to new</option>
        </select>

        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {
        books?.map((book) => (
          <ProductCard book={book} />
        ))
        }
      </div>
    </div>
  );
}
