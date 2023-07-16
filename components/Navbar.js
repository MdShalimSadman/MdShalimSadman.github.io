import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  
  return (
    <header className="text-gray-600 body-font">
       <div className="container mx-auto flex flex-wrap  pb-5 flex-col md:flex-row items-center justify-between">
        <a href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logo3.png" alt="" width={180} height={40} />
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base text-white justify-center">
          <a className="mr-5 hover:text-blue-500 font-bold text-lg" href={'/'}>About me</a>
          <a className="mr-5 hover:text-blue-500 font-bold text-lg" href={'/'}>Skills</a>
          <a className="mr-5 hover:text-blue-500 font-bold text-lg" href={'/'}>Projects</a>
          <a className="mr-5 hover:text-blue-500 font-bold text-lg" href={'/'}>Experiences</a>
          <a className="mr-5 hover:text-blue-500 font-bold text-lg" href={'/'}>Contact</a>
        </nav>
       
      </div>
    </header>
  )
}

export default Navbar
