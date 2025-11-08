import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className='bg-white mt-20 border-t border-gray-200 py-10 text-center'>
    <div className='flex justify-center space-x-6 mb-4'>
      <a
        href='https://www.linkedin.com/in/girish-yadav'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-500 hover:text-blue-600'
      >
        <Linkedin className='h-6 w-6' />
      </a>
      <a
        href='https://github.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-500 hover:text-blue-600'
      >
        <Github className='h-6 w-6' />
      </a>
    </div>
    <p className='text-sm text-gray-500'>
      © {new Date().getFullYear()} Girish Yadav. All rights reserved.
    </p>
  </footer>
);

export default Footer;
