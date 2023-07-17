// import { Button } from '@/components/ui/button';
import banner from '../assets/images/bookBanner.png';
import hero from '../assets/images/hero3.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Footer from '../layouts/Footer';
// import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            DIVE TO<br /> SEA OF KNOWLEDGE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Choice your best one without any hassle
          </p>
          <div className="text-primary mt-20">
            <p>“Reality doesn’t always give us the life that we desire,<br/> 
            but we can always find what we desire between the pages of books.”<br/>
            ―Adelise M. Cullens</p>
          </div>
          <Button className="mt-5">Let's explore</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            Buy book make future
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
