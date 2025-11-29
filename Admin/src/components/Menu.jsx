import React from "react";
import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import User from "../pages/User.jsx";
import Products from "../pages/Products.jsx";

const Menu = () => {
  return (
    <div className="p-[20px] bg-gray-100 w-[350px] shadow-lg h-[100vh]">
      <ul className="flex flex-col pl-[20px] mt-[20px] items-start justify-start">
       <Link to="/"><li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaHome className="mr-[15px] text-[#ef93db]" />
          Home
        </li></Link>
        <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaUser className="mr-[15px] text-[#ef93db]" />
          Profile
        </li>

        <hr className="w-full my-[20px] border-gray-300" />
        <Link to="/users">
          <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
            <FaUsers className="mr-[15px] text-[#ef93db]" />
            Users
          </li>
        </Link>
        <Link to="/products">
          <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
            <FaBox className="mr-[15px] text-[#ef93db]" />
            Products
          </li>
        </Link>
        <Link to="/orders">
          <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
            <FaClipboardList className="mr-[15px] text-[#ef93db]" />
            Orders
          </li>
        </Link>
        <hr className="w-full my-[20px] border-gray-300" />
        <Link to="/banners">
          <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
            <FaElementor className="mr-[15px] text-[#ef93db]" />
            Banners
          </li>
        </Link>

        <Link to="/settings">
          <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
            <FaCog className="mr-[15px] text-[#ef93db]" />
            Settings
          </li>
        </Link>
        <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaHdd className="mr-[15px] text-[#ef93db]" />
          Backups
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100">
          <FaChartBar className="mr-[15px] text-[#ef93db]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100">
          <FaClipboard className="mr-[15px] text-[#ef93db]" />
          All logs
        </li>

        <li className="flex items-center text-[20px] mt-[20px] cursor-pointer transition-colors duration-100">
          <FaSignOutAlt className="mr-[15px] text-[#ef93db]" />
          Logouts
        </li>
      </ul>
    </div>
  );
};

export default Menu;
