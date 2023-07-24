import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "./components/ui/Toaster"
import MainLayout from "./layouts/MainLayout"
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { setLoading, setUser } from "./redux/features/userSlice";


function App() {
    const dispatch = useAppDispatch();

    useEffect(()=> {
      dispatch(setLoading(true))

      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email));
          dispatch(setLoading(false))
        } else {
          dispatch(setLoading(false))
        }
      });
    },[dispatch])

      
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  )
}

export default App
