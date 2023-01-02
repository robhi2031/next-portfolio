import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-teal-600 dark:bg-teal-900 text-white sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-3 md:py-0 lg:max-w-7xl flex justify-between">
          <div className="flex items-center h-25 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Stream<span className="text-blue-500">line</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-row gap-1 items-center py-3 md:py-2">
                  <Link
                    activeClass="Home"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
                  >
                    Projects
                  </Link>

                  <Link
                    activeClass="Services"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
                  >
                    Services
                  </Link>

                  <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-gray-100 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-6 md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-1 rounded-full text-teal-100 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
