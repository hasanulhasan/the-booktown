import { useState } from 'react'
import bookIcon from '../assets/images/bookIcon.jpg'
import { useAppDispatch } from '../redux/hooks';
import { createUser } from '../redux/features/userSlice';
import { toast } from './ui/use-toast';

export default function RegisterForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(email, password)
    dispatch(createUser({email, password}))
  }

  return (
    <>
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <div className="flex justify-center">
                <img src={bookIcon} alt="bookIcon" className='max-h-16' />
            </div>
            <h3 className="text-2xl font-bold text-center">Register your account</h3>
            
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
               <div>
                <label className="block" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={email} name='email' onChange={(e)=> setEmail(e.target.value)}/>
                            {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={password} name='password' onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="flex items-baseline justify-between">
                    <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Already registered?</a>
                </div>
            </div>
        </form>

          </div>
      </div>
    </div>
    </>
  )
}
