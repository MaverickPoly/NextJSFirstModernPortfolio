"use client"

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsChevronDown, BsPlayCircle, BsPhone } from "react-icons/bs";
import { FaChartPie, FaLock, FaCogs } from "react-icons/fa";
import Link from "next/link";
import BrainLogo from "@/lib/image.png";
import Image from "next/image";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleProductMenu = () => setIsProductMenuOpen(!isProductMenuOpen);

  const toggleMobileProductMenu = () =>
    setIsMobileProductMenuOpen(!isMobileProductMenuOpen);

  // Close product menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-300 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="">
            <Image
              width={40}
              height={40}
              className="rounded-lg"
              src={BrainLogo}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-purple-700"
              aria-expanded={isProductMenuOpen}
              onClick={toggleProductMenu}
            >
              Product
              <BsChevronDown className="h-5 w-5 text-gray-400" />
            </button>

            {/* Dropdown menu */}
            {isProductMenuOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <DropdownItem
                    icon={<FaChartPie className="h-6 w-6 text-gray-600" />}
                    title="Analytics"
                    description="Get a better understanding of your traffic"
                  />
                  <DropdownItem
                    icon={<BsPhone className="h-6 w-6 text-gray-600" />}
                    title="Engagement"
                    description="Speak directly to your customers"
                  />
                  <DropdownItem
                    icon={<FaLock className="h-6 w-6 text-gray-600" />}
                    title="Security"
                    description="Your customers’ data will be safe and secure"
                  />
                  <DropdownItem
                    icon={<FaCogs className="h-6 w-6 text-gray-600" />}
                    title="Integrations"
                    description="Connect with third-party tools"
                  />
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <DropdownLink
                    href="#"
                    text="Watch demo"
                    icon={<BsPlayCircle className="h-5 w-5 text-gray-400" />}
                  />
                  <DropdownLink
                    href="#"
                    text="Contact sales"
                    icon={<BsPhone className="h-5 w-5 text-gray-400" />}
                  />
                </div>
              </div>
            )}
          </div>

          <a href="#blog" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-700">
            Blog
          </a>
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-700">
            About
          </Link>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-700">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
            Hire me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white h-screen">
          <div className="flex items-center justify-between backdrop-blur-none bg-white">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flow-root bg-white">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-2 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    onClick={toggleMobileProductMenu}
                  >
                    Product
                    <BsChevronDown className="h-5 w-5 text-gray-400" />
                  </button>

                  {isMobileProductMenuOpen && (
                    <div className="pl-2 space-y-1">
                      <DropdownItem
                        icon={<FaChartPie className="h-4 w-4 text-gray-600" />}
                        title="Analytics"
                        description="Get a better understanding of your traffic"
                      />
                      <DropdownItem
                        icon={<BsPhone className="h-4 w-4 text-gray-600" />}
                        title="Engagement"
                        description="Speak directly to your customers"
                      />
                      <DropdownItem
                        icon={<FaLock className="h-4 w-4 text-gray-600" />}
                        title="Security"
                        description="Your customers’ data will be safe and secure"
                      />
                      <DropdownItem
                        icon={<FaCogs className="h-4 w-4 text-gray-600" />}
                        title="Integrations"
                        description="Connect with third-party tools"
                      />
                    </div>
                  )}
                </div>
                <a
                  href="#about"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#blog"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-3">
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Dropdown item component
const DropdownItem = ({ icon, title, description }) => (
  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      {icon}
    </div>
    <div className="flex-auto">
      <a href="#" className="block font-semibold text-gray-900">
        {title}
        <span className="absolute inset-0"></span>
      </a>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

// Dropdown link component
const DropdownLink = ({ href, text, icon }) => (
  <a
    href={href}
    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
  >
    {icon}
    {text}
  </a>
);

export default Header;
