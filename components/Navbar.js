import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  return (
    <header className="text-gray-600 body-font md:fixed w-full !z-50 mt-6">
      <div className="px-8 container mx-auto flex flex-wrap  pb-5 flex-col md:flex-row  justify-between ">
        <div  className="bg-gray-900 !w-fit backdrop-blur-md  bg-opacity-50 rounded-lg">
        <a href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logo3.png" alt="" width={120} height={120} />
        </a>
        </div>

         <div  className="bg-gray-900 backdrop-blur-md  bg-opacity-50 rounded-lg p-2 px-4 !h-fit hidden md:!block">
        <nav className="md:ml-auto flex-wrap items-center text-sm text-white justify-center !flex !h-fit">
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
          <Link href="#contactRef" className=" hover:text-blue-500 font-bold text-lg">
            Contact
          </Link>
        </nav>
</div>

      </div>
    </header>
  )
}

export default Navbar
