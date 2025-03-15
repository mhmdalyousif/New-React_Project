import React from "react";
import LogoLight from "../assets/LogoLight.jpg";
import Payment from "../assets/Payment.png";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import {  BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={LogoLight} alt="LogoLight" />
          <p className="text-white text-sm tracking-wide"> @ ReactBd.com</p>
          <img className="w-56" src={Payment} alt="Payment" />
          <div className="flex gap-5 text-lg text-gray-400 ">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,Ruwi Muscat-Oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 24769821</p>
            <p>e-mail: Bazar@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">Profile</h2>
            <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "> 
            <span className="text-lg">
                <BsPersonFill/>
            </span>
            My Account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "> 
            <span className="text-lg">
                <BsPaypal/>
            </span>
            Checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "> 
            <span className="text-lg">
                <FaHome/>
            </span>
            Order Tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "> 
            <span className="text-lg">
                <MdLocationOn/>
            </span>
            Help & Support
          </p>
            </div>
        </div>

        <div className="flex flex-col justify-center">
            <input className="bg-transparent border px-4 py-2 text-sm "
            placeholder="e-mail"
             type="text" />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default Footer;
