import React from 'react';
import logo from '@/assets/images/technet-logo-white.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20">
      <div className="flex justify-between">
        <div>
          {/* <img className="h-10" src={logo} alt="Logo" /> */}
          <h2 className='lg:text-3xl text-secondary font-extrabold sm:text-sm'>The booktown</h2>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; BookTown {year}</p>
      </div>
    </div>
  );
}
