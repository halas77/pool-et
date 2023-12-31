import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdCall, MdShare } from "react-icons/md";
import { motion } from "framer-motion";
import Form from './Form'

const Contact = () => {
  return (
    <div className="w-full bg-white pt-24">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-4 md:mx:24 lg:mx-32 my-12">
          <h1 className="font font-extrabold text-3xl font-sans mb-10">
            CONTACT{" "}
            <span className="font-sans border-b-2 border-sky-900 pb-1 pr-10">
              US
            </span>
          </h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
              <div className="bg-sky-900 p-3 rounded-full">
                <i className="text-slate-50">
                  <TiLocation size={28} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                  Our Address
                </h2>
                <p className="font-sans text-gray-300 text-sm">
                  {" "}
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
              <div className="bg-sky-900 p-3 rounded-full">
                <i className="text-slate-50">
                  <MdEmail size={28} />
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                  Email Us
                </h2>
                <p className="font-sans text-gray-300 text-sm">
                  
                  poolitsolutions@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
              <div className="bg-sky-900 p-3 rounded-full">
                <i className="text-slate-50">
                  <MdCall size={28} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                  Call Us
                </h2>
                <p className="font-sans text-gray-300 text-sm">
                  {" "}
                  +251 123 1234
                </p>
                <p className="font-sans text-gray-300 text-sm">
                  {" "}
                  +251 987 9876
                </p>
              </div>
            </div>

            <div className="bg-sky-950 rounded-lg p-4 flex items-center h-28 ">
              <div className="bg-sky-900 p-3 rounded-full">
                <i className="text-sky-50">
                  <MdShare size={25} />{" "}
                </i>
              </div>
              <div className="p-5">
                <h2 className="pb-2 text-xl font-sans font-bold  text-gray-50">
                  Social as
                </h2>
                <div className="flex gap-3 ">
                  <a href="https://www.facebook.com/Poolshare" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                      <FaFacebook size={23} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/pooltech9221/" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                      <FaInstagram size={23} />
                    </div>
                  </a>
                  <a href="https://t.me/Pool_ambassador" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                      <FaTelegram size={23} />
                    </div>
                  </a>

                  <a href="https://www.tiktok.com/@pool9221" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-300 hover:text-gray-50 ease-in-out">
                      <FaTiktok size={23} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Form />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
