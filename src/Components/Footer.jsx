import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-4">
              <FaFacebook size={28} />
              <FaInstagram size={28} />
              <FaTwitter size={28} />
              <FaLinkedinIn size={28} />
            </div>
            <div className='mt-8 border-t border-gray-800 pt-8 flex flex-col item-center'>
                <p className='md:text-lg'>&copy; 2024 Your Company. All Rights Reserved.</p>
                <p className='md:text-lg pl-8'>Supportive Partner ❤️ Ravi Shankar.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
