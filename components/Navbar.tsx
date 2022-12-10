import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1f2937] ">
      <AiFillBug size={70} className="p-3" />
      <h1 className="w-full text-3xl font-bold text-[#1f2937] invisible md:visible lg:visible">
        <Link href="/">Bug Tracker</Link>
      </h1>
      <ul className="flex justify-between">
        <Link href="/dashboard">
          <li className="p-4 cursor-pointer font-bold hover:text-gray-600">
            Dashboard
          </li>
        </Link>
        <li className="p-4 cursor-pointer font-bold hover:text-gray-600">
          Tickets
        </li>
        <li className="p-4 cursor-pointer font-bold hover:text-gray-600">
          Projects
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
