import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap  pb-5 flex-col md:flex-row items-center justify-between ">
        <a href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logo3.png" alt="" width={180} height={40} />
        </a>
        <nav className="mr-5 md:ml-auto flex flex-wrap items-center text-base text-white justify-center hidden md:block">
          <Link href="/#aboutMeRef" className="mr-5 hover:text-blue-500 font-bold text-lg">
            About me
          </Link>
          <Link href="/#skillsRef" className="mr-5 hover:text-blue-500 font-bold text-lg">
            Skills
          </Link>
          <Link href="/#projectsRef" className="mr-5 hover:text-blue-500 font-bold text-lg">
            Projects
          </Link>
          <Link href="/#institutesRef" className="mr-5 hover:text-blue-500 font-bold text-lg">
            Experience
          </Link>
          <Link href="#contactRef" className="mr-5 hover:text-blue-500 font-bold text-lg">
            Contact
          </Link>
        </nav>


      </div>
    </header>
  )
}

export default Navbar
