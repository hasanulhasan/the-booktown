import { useState } from 'react'
import { useAddBookMutation } from '../redux/features/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';

export default function Addbook() {
  const navigate = useNavigate();
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('Science');
  const [rating, setRating] = useState('1');
  const [status, setStatus] = useState(true);
  const [dateOfPublication, setDateOfPublication] = useState('');
  const reviews: string[] = [];
  
  const resetForm = () => {
    setTitle('')
    setAuthor('')
    setImg('')
    setPrice('')
    setGenre('')
    setRating('')
    setStatus(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, img, price, genre, rating, status, dateOfPublication, reviews})
    resetForm();
    toast({
      title: 'Book Added Successfully',
    });
    navigate('/')
  }

  return (
    <>
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600 text-center">Add a new Book</h2>
      <p className="text-gray-500 mb-6 text-center">The form for adding a new book</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Enter Book info</p>
            <p>Please fill out all the fields.</p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="book_title">Title</label>
                <input type="text" name="title" id="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={title} onChange={(e) => setTitle(e.target.value)} required/>
              </div>
              <div className="md:col-span-5">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
              </div>
              <div className="md:col-span-5">
                <label htmlFor="imgUrl">Image URL</label>
                <input type="text" name="imgUrl" id="imgUrl" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={img}
                onChange={(e) => setImg(e.target.value)} required/>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={price} onChange={(e) => setPrice(e.target.value)} required/>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="genre">Genre</label>
                <select name="genre" id="genre" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={genre} onChange={(e) => setGenre(e.target.value)} required>
                  <option value='Science'>Science</option>
                  <option value='History'>History</option>
                  <option value='Novel'>Novel</option>
                  <option value='Romantic'>Romantic</option>
                  <option value='Story'>Story</option>
                  </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={rating} onChange={(e) => setRating(e.target.value)} required>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="status">Status</label>
                <select name="status" id="status" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={status} onChange={(e) => setStatus(!status)} required>
                  <option value='true'>In Stock</option>
                  <option value='false'>Out Of Stock</option>
                </select>
              </div>

              <div className="md:col-span-2">
                  <label htmlFor="date">Published Date</label>
                  <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="date" name="lwsJobDeadline" id="lwsJobDeadline" value={dateOfPublication} onChange={(e) => setDateOfPublication(e.target.value)} required/>
              </div>

              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="ok" id="ok" className="form-checkbox"/>
                  <label htmlFor="ok" className="ml-2">I agree, All of information is right</label>
                </div>
              </div>
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</div>
    </>
  )
}
