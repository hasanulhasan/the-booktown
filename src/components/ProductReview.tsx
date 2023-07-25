/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useEditBookMutation } from '../redux/features/apiSlice';
import { useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

interface IProps {
  reviews?: string[] | undefined;
  bookid: string | undefined
}

export default function ProductReview({reviews, bookid}: IProps) {
  const {email} = useAppSelector(state=> state.user.user)
  const [editbook] = useEditBookMutation();
  const [comment, setComment] = useState('');

  const reviewHandle = async ()=> {
    await editbook({
        id: bookid,
        data: { reviews:[...reviews!, comment] }
      })
      setComment('');
  }

  return (
    <div className="max-w-7xl mx-auto mt-5">
      {
        email? <>
        <div className="flex gap-5 items-center">
        <Textarea value={comment} onChange={(e)=> setComment(e.target.value)} className="min-h-[30px]" />
        <Button onClick={reviewHandle} className="rounded-full h-10 w-10 p-2 text-[25px]">
          <FiSend />
        </Button>
      </div>
        </>: 
        <>
        <h1 className='text-center text-lg'>Please Login to leave a comment, <Link to='/login' className='text-green-500'>Click here</Link> to login</h1>
        </>
      }
      <div className="mt-10">
      { 
        reviews?.length !== 0 &&
        (
          reviews!.map((comment:string) => (
            <div className="flex gap-3 items-center mb-5">
              <Avatar>
                <AvatarImage src='https://ui-avatars.com/api/?name=x'/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{comment}</p>
            </div>
          ))
        )
      }
      </div>
    </div>
  );
}
