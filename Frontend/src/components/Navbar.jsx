import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState({});

  return (
    <div className="flex items-center justify-between h-[100px] shadow-lg p-6">
      <Link to="/">
        <div className="cursor-pointer m-2">
          <img src="/blisslogo1.png" alt="" height="150px" width="150px" />
        </div>
      </Link>

      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
        />
        <Link to={`/products/${search}`}>
          <FaSearch className="text-[20px] cursor-pointer" />
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px]">
            <Badge badgeContent={2} color="secondary">
              <ShoppingBasketIcon className="text-pink-500" />
            </Badge>
          </div>
        </Link>

        <Link to="/login">
          <div className="flex items-center space-x-2 border border-pink-300 hover:border-pink-100  hover:bg-pink-100 p-2 rounded-lg duration-300 cursor-pointer">
            <FaUser className="text-[#e455c5] hover:text-pink-600  transition duration-300" />
            <span className="text-[#e455c5] hover:text-pink-600  transition duration-300">
              Login
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
