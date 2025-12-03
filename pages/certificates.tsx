import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const certificatesData = [
  {
    img: "/images/california.png",
    title: "C++ for C programmers Part A",
    org: "University of California, Santa Cruz",
  },
  {
    img: "/images/cisco.png",
    title: "Cisco IT Essentials",
    org: "Cisco",
  },
  {
    img: "/images/edinburg.png",
    title: "Code Yourself! An Introduction to Programming",
    org: "The University of Edinburgh",
  },
  {
    img: "/images/leeds.jpeg",
    title: "Computer Programming for Everyone",
    org: "University of Leeds",
  },
  {
    img: "/images/Duke_University.svg",
    title: "Java programming: Solving problems with Software",
    org: "Duke University",
  },
  {
    img: "/images/san_diego.png",
    title: "Mathematical Thinking for Computer Science",
    org: "UC San Diego",
  },
  {
    img: "/images/it_training.jpg",
    title: "Hands on SQA and Cyber Security Course",
    org: "IT Training BD",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const Certificates = () => {
  return (
    <div className="relative bg-[#132E52] overflow-x-hidden">
      <video
        className="fixed top-0 left-0 w-screen h-full object-cover z-0 opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      <section className="text-white z-10 relative min-h-screen">
        <Navbar />
        <div className="pt-40 container mx-auto px-4">
          <h2 className="md:text-6xl md:font-bold text-3xl font-semibold mb-9 text-center animate-slide-in-left">
            C<span className="text-blue-300">E</span>RTIFICATES
          </h2>

          <div className="flex w-full justify-center items-center">
            <p className="mt-2 text-lg font-medium text-gray-300 text-center max-w-5xl mb-4">
              I have earned multiple industry-recognized certifications through
              leading online learning platforms. These achievements highlight my
              commitment to continuous learning, staying updated with modern
              technologies, and building real-world skills.
            </p>
          </div>
        </div>

        <div className="mt-6 pb-6 space-y-3 p-2">
          {certificatesData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="border flex items-center gap-5 min-h-28 md:h-28 bg-gray-900 bg-opacity-50 border-6 border-blue-300 p-3 px-6 rounded-xl mx-auto max-w-2xl"
            >
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={item.title}
              />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Certificates
