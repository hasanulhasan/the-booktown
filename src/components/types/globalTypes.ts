export interface IBook {
  _id: string;
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

export interface IWishBook {
  _id: string;
  title: string;
  author: string;
  img: string;
  price: string;
  rating: string;
  genre: string;
  dateOfPublication: string;
  status: boolean;
  reviews?: string[];
  isRead: boolean;
  userEmail: string;
}

export interface IUser {
  name: string;
  email: string;
  role: string;
}