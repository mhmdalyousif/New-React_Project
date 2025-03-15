import React from "react";
import LogoDark from "../assets/LogoDark.svg"; // Correct path and extension
import Cart from "../assets/Cart.jpg"
import cart2 from "../assets/cart2.webp"

const Header = () => {
  return (
    <div className="w-full h-25 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-30 h-[90px]" src={LogoDark} alt="LogoDark" />
        </div>

        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Blogs
            </li>
          </ul>
          <div className="relative ">
            <img className="w-14" src={Cart} alt="Cart" />
            <span className="absolute w-6 top-4 left-5 text-sm flex  items-center justify-center font-semibold ">0</span>
          </div>
          <img className="w-13 h-10 rounded-full"  src={cart2} alt="cart2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
