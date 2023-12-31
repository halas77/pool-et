import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#000300] w-full mx-auto py-4 px-6 lg:px-16 grid lg:grid-cols-3 gap-4 text-gray-500">
        <div>
          <div className="flex gap-3">
            <a href="/" className="mr-3">
              <img src="/Pool_logo.png" width={60} height={20} alt="Logo" />
            </a>
            <a href="" className="flex items-center justify-center ">
              <img src={"/ios.jpeg"} height={20} width={150} alt="img"/>
            </a>
            <a href="" className="flex items-center justify-center">
              <img src={"/android1.jpg"} height={20} width={300} alt="img" className="w-[150px]"/>
            </a>
          </div>
          <p className="py-4 text-sm font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos
            eius sunt labore laudantium, omnis distinctio molestiae explicabo
            ratione neque. Earum exercitationem quam odio. Repudiandae, dolor
            laborum nesciunt nam, ducimus placeat magnam vitae,
          </p>
          <div className="flex justify-between md:w-[80%] my-6">
            <a href="https://www.facebook.com/Poolshare">
              <FaFacebook
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </a>
            <a href="https://www.instagram.com/pooltech9221/">
              <FaInstagram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </a>
            <a href="https://t.me/Pool_ambassador">
              <FaTelegram
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </a>
            <a href="https://www.tiktok.com/@pool9221">
              <FaTiktok
                size={30}
                className="text-gray-400 hover:text-gray-300"
              />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between lg:px-44 mt-6">
          <div>
            <h6 className="font-medium text-gray-300">Company</h6>
            <ul className="flex flex-col">
              <a href="/" className="py-2 text-sm hover:text-gray-300">
                About Pool
              </a>
              <a
                href="/"
                className="py-2 text-sm hover:text-gray-300"
              >
                Contact
              </a>
              <a
                href="/"
                className="py-2 text-sm hover:text-gray-300"
              >
                Services
              </a>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-300">Conatct Us</h6>
            <ul className="flex flex-col">
              <li className="py-2 text-sm">
                Call Us: +251 123 1234 / +251 098 9876
              </li>
              <li className="py-2 text-sm">
                Email Us: Poolitsolutions@gmail.com
              </li>
              <li className="py-2 text-sm">Location: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#000300] w-full flex justify-center items-center mx-auto pb-2">
        <p className="text-gray-400 mx-auto">
          Pool IT Solution | All rights reserved &copy;
        </p>
      </div>
    </div>
  );
};

export default Footer;
