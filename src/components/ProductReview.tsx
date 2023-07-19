import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useAddReviewMutation } from '../redux/features/apiSlice';


export default function ProductReview({reviews, bookid}) {
  const [addReview] = useAddReviewMutation();
  const [comment, setComment] = useState('');

  const reviewHandle = ()=> {
      addReview({
        id: bookid,
        data: { reviews:[...reviews, comment] }
      })
      setComment('');
  }

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea value={comment} onChange={(e)=> setComment(e.target.value)} className="min-h-[30px]" />
        <Button onClick={reviewHandle} className="rounded-full h-10 w-10 p-2 text-[25px]">
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {reviews.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src='https://ui-avatars.com/api/?name=x'/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
