import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterView from './FooterView';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <FooterView/>
    </div>
  );
}
