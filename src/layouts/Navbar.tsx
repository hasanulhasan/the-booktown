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
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { toast } from '../components/ui/use-toast';
import { setUser } from '../redux/features/userSlice';

export default function Navbar() {
  const {user} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  const firstwordAvatar:string = user.email

  const handleLogout = ()=> {

    signOut(auth).then(() => {
      dispatch(setUser(null))
      toast({
        title: 'Logout Successful',
      });
    })

  }

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            {/* <img className="h-8" src={logo} alt="log" /> */}
            <Link to='/'><h2 className='lg:text-3xl text-primary font-extrabold sm:text-sm'>The bookTown</h2></Link>
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
              </li>{
                user?.email?  
                <>
                  <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${firstwordAvatar}`} />
                      <AvatarFallback>X</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to='/addbook'>
                    <DropdownMenuItem className="cursor-pointer">
                      Add Book
                    </DropdownMenuItem>
                      </Link>
                    <Link to='/wishlist'>
                    <DropdownMenuItem className="cursor-pointer">
                      WishList
                    </DropdownMenuItem>
                      </Link>
                    <Link to="/">
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                    </Link>
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
