/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react'
import bookIcon from '../assets/images/bookIcon.jpg'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createUser } from '../redux/features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from './ui/toast';
import { useAddUserMutation } from '../redux/features/apiSlice';

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const {user, isLoading} = useAppSelector(state=> state.user)
  // const [addUser] = useAddUserMutation();
  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string | number>();

  const handleSubmit = async (e: { preventDefault: () => void; })=> {
    e.preventDefault();
    await dispatch(createUser({email, password}))
  }

  useEffect(()=> {
    if(user.email && !isLoading){
      // addUser({
      //   name, eamil, role:'buyer'
      // })
      navigate('/')
      Toast({
        title: 'Registration Successful',
      });
    }
  },[user.email, isLoading])

  return (
    <>
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-10 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
            <div className="flex justify-center">
                <img src={bookIcon} alt="bookIcon" className='max-h-16' />
            </div>
            <h3 className="text-2xl font-bold text-center">Register your account</h3>
            
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
               <div>
                <label className="block" htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your Name"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={name} name='name' onChange={(e)=> setName(e.target.value)} required/>
                            {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
              </div>
               <div>
                <label className="block" htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter your Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" value={email} name='email' onChange={(e)=> setEmail(e.target.value)} required/>
                            {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
              </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Enter your Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={password} name='password' onChange={(e)=> setPassword(e.target.value)} required/>
                </div>
                <div className="flex items-baseline justify-between">
                    <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                    <Link to="/login" className="text-sm text-blue-600 hover:underline">Go Login</Link>
                </div>
            </div>
        </form>

          </div>
      </div>
    </div>
    </>
  )
}
