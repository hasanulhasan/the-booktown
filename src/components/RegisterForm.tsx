import { useEffect, useState } from 'react'
import bookIcon from '../assets/images/bookIcon.jpg'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createUser } from '../redux/features/userSlice';
import { toast } from './ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from './ui/toast';

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const {user, isLoading} = useAppSelector(state=> state.user)
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(createUser({email, password}))
  }

  useEffect(()=> {
    if(user.email && !isLoading){
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
        <div className="px-10 py-6 mt-4 text-left bg-white shadow-lg">
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
