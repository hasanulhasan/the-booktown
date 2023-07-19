export interface IBook {
  id: number;
  title: string;
  author: string;
  img: string;
  price: string;
  genre: string;
  status: boolean;
  rating: number;
  dateOfPublication: string;
  reviews?: string[]
}
