import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTelegram, FaGithub, FaLinkedin, FaYoutube, FaReddit } from 'react-icons/fa'
import BrainLogo from "@/lib/image.png";



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900  py-8 px-16 font-sans tracking-wide relative">
      <div className='flex flex-row justify-between mx-4'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-600 text-lg transition-all">Projects</a>
              </li>
              <li>
                <a href="#workflow" className="text-gray-400 hover:text-purple-600 text-lg transition-all">Workflow</a>
              </li>
              <li>
                <a href="#logo" className="text-gray-400 hover:text-purple-600 text-lg transition-all">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Others</h2>
            <ul className="space-y-4">
              <li>
              <Link href="/about" className="text-gray-400 hover:text-purple-600 text-lg transition-all">About</Link>
              </li>
              <li>
              <a href="#" className="text-gray-400 hover:text-purple-600 text-lg transition-all">Steps involved</a>
              </li>
              <li>
              <a href="#" className="text-gray-400 hover:text-purple-600 text-lg transition-all">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center lg:justify-center">
            <a href='#'><Image src={BrainLogo} alt="logo" width={160} className='rounded-lg' /></a>
          </div>
      </div>

      <hr className="my-8 border-gray-600" />

      <div className="flex sm:justify-between flex-wrap gap-6 mx-8">
        <div className="flex space-x-5">
          <a href="#"  target='_blank' className="text-red-500 hover:text-red-700 text-sm transition-all">
            <FaYoutube className='w-7 h-7'/>
          </a>
          {/* <a href="#"  target='_blank' className="text-blue-500 hover:text-blue-700 text-sm transition-all">
            <FaFacebook className='w-7 h-7'/>
          </a> */}
          <a href="https://github.com/MaverickPoly/" target='_blank' className="text-neutral-500 hover:text-neutral-700 text-sm transition-all">
            <FaGithub className='w-7 h-7'/>
          </a>
          <a href="#"  target='_blank' className="text-blue-600 hover:text-blue-800 text-sm transition-all">
            <FaLinkedin className='w-7 h-7'/>
          </a>
          <a href="#"  target='_blank' className="text-blue-500 hover:text-blue-700 text-sm transition-all">
            <FaTelegram className='w-7 h-7'/>
          </a>
          {/* <a href="#"  target='_blank' className="text-red-500 hover:text-red-600 text-sm transition-all">
            <FaReddit className='w-7 h-7'/>
          </a> */}
        </div>

        <p className='text-gray-300 text-sm'>© Maverick Polymath Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer