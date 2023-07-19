import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { toast } from '../components/ui/use-toast';
import { setUser } from '../redux/features/userSlice';

// import logo from '../assets/images/bookLogo2.jpg';

export default function Navbar() {
  const {user} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  const firstwordAvatar = user.email

  const handleLogout = ()=> {
    console.log('logout done')

    signOut(auth).then(() => {
      dispatch(setUser(null))
      toast({
        description: 'Logout Successful',
      });
    })

  }

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            {/* <img className="h-8" src={logo} alt="log" /> */}
            <h2 className='text-3xl text-primary font-extrabold'>The booktown</h2>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">Books</Link>
                </Button>
              </li>
              {/* {
                user.email &&  
                (<>
                <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
                </li>
                </>)
              } */}
              {/* <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li> */}
              {/* <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li> */}
              <li>
                {/* <Cart /> */}
              </li>{
                user?.email?  
                <>
                  <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${firstwordAvatar}`} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                    <Link to='/'>WishList</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <Link to='/'>Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
                </> : 
                <>
                <li>
                <Button variant="secondary" asChild>
                <Link to="/login">Login</Link>
                </Button>
                </li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
