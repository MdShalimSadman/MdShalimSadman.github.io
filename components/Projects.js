"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Exambinary Web & Mobile App",
    src: "/images/exambinary.jpg",
    desc: "Complex AI features on the client side with smooth updates.",
    tech: ["/next-2.png", "/tailwindcss.png", "/typescript.png", "/shadcn.png", "/react-native.svg"],
    url: "https://www.exambinary.com/en",
    github: null,
  },
  {
    name: "Cedofinance Website & Portal",
    src: "/images/cedofinance.jpg",
    desc: "Company portfolio, portal and blog management.",
    tech: ["/next-2.png", "/tailwindcss.png", "/typescript.png", "/sanity.png"],
    url: "https://cedofinance.se/en",
    github: null, // private repo
  },
  {
    name: "AI Professional e-book & e-videos",
    src: "/images/ai-professional.jpg",
    desc: "An e-book reader, auth with firebase authentication, Bkash payment verification, video library.",
    tech: [
      "/next-2.png",
      "/tailwindcss.png",
      "/typescript.png",
      "/firebase.png",
      "/bkash.jpg"
    ],
    url: "https://www.boostnboom.com/en",
    github: null,
  },
  {
    name: "MAHA e-commerce and OMS",
    src: "/images/maha.jpg",
    desc: "Cart with Redux, order management via Firebase & payment integration with ssl commerz.",
    tech: [
      "/next-2.png",
      "/tailwindcss.png",
      "/typescript.png",
      "/firebase.png",
      "/sanity.png",
      "/redux.svg",
      "/nodemailer.png",
      "/sslcommerz.png",
      "/shadcn.png",
    ],
    url: "https://maha-ecommerce.vercel.app/",
    github: "https://github.com/MdShalimSadman/maha",
  },
  {
    name: "Resume Spark CV maker & ATS Checker",
    src: "/images/resume-spark.jpg",
    desc: "Resume editor, download option with react pdf. OpenAi's GPT-5-Nano model for ATS report.",
    tech: [
      "/next-2.png",
      "/tailwindcss.png",
      "/typescript.png",
      "/react-pdf.png",
    ],
    url: "https://resume-spark.vercel.app/",
    github: "https://github.com/MdShalimSadman/resume-spark",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-center">
          PRO<span className="text-blue-400">J</span>ECTS
        </h2>

        <div className="flex space-x-4 overflow-hidden h-[400px] md:h-[500px] px-8">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isAnyActive = activeIndex !== null;

            return (
              <div
                key={index}
                className={`relative flex-1 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-lg shadow-lg
                  ${
                    isActive
                      ? "flex-[3] z-10"
                      : isAnyActive
                      ? "flex-[0.7]"
                      : "flex-[1]"
                  }
                `}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* IMAGE */}
                <img
                  src={project.src}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-all duration-500
                    ${isActive ? "filter-none" : "filter"}
                  `}
                />

                {/* ✅ TOP RIGHT LINKS (ONLY SHOW WHEN ACTIVE) */}
                <div
                  className={`absolute top-3 right-3 flex gap-2 z-20 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }
                  `}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 flex items-center justify-center p-2 text-xs rounded-md hover:text-blue-300 transition"
                  >
                    <FaExternalLinkAlt size={15}/>
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 flex items-center justify-center px-1 py-1 text-xs rounded-md hover:text-blue-300 transition"
                    >
                      <FaGithub size={20}/>
                    </a>
                  )}
                </div>

                {/* OVERLAY DESCRIPTION */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                >
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm">{project.desc}</p>

                  {/* TECH STACK ICONS */}
                  <div className="mt-3 flex items-center gap-3">
                    {project.tech?.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="tech"
                        className="h-6 w-6 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
