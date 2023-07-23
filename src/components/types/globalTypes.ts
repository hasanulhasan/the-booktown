export interface IBook {
  title: string;
  author: string;
  img: string;
  price: string;
  rating: string;
  genre: string;
  dateOfPublication: string;
  status: boolean;
  reviews?: string[];
}
