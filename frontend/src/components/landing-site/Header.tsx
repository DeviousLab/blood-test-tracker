import { useState } from 'react';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';

import Logo from '../../assets/images/temp-logo.svg';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-gray-100">
      <nav className="w-full">
        <div className="container mx-auto flex items-center justify-around px-6">
          <div className="flex items-center" aria-label="Home" role="img">
            <img className="w-8 cursor-pointer" src={Logo.src} alt="logo" />
            <p className="ml-2 font-Poppins text-base text-logo lg:ml-2 lg:text-2xl">
              triage
            </p>
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:block md:hidden lg:hidden"
            >
              <CgMenuRightAlt className="h-8 w-8 text-secondary" />
            </button>
            <div
              id="menu"
              className={` ${show ? '' : 'hidden'} md:block lg:block `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`fixed top-0 z-30 mt-6 block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden lg:hidden`}
              >
                <CgClose className="h-8 w-8 text-secondary" />
              </button>
              <ul className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-white py-10 text-3xl md:relative md:flex md:flex-row md:bg-transparent md:text-base">
                <li className="cursor-pointer pt-10 text-base text-logo hover:text-gray-900 md:pt-0 lg:text-base">
                  <a href="">Features</a>
                </li>
                <li className="cursor-pointer pt-10 text-base text-logo hover:text-gray-900 md:ml-5 md:pt-0 lg:ml-10 lg:text-base">
                  <a href="">Process</a>
                </li>
                <li className="cursor-pointer pt-10 text-base text-logo hover:text-gray-900 md:ml-5 md:pt-0 lg:ml-10 lg:text-base">
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-3xl">
            <button className="hidden bg-transparent px-4 py-1 text-sm text-logo hover:text-gray-900 sm:px-8 sm:py-3 md:block lg:text-base">
              Login
            </button>
            <button className="hidden rounded-3xl  border border-primary bg-transparent px-4 py-1 text-sm text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-base">
              Sign Up 🡒
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
