"use client";

import { useState } from "react";

const projects = [
  {
    name: "Exambinary",
    src: "/images/exambinary.jpg",
    desc: "Web platform for managing tech solutions and client interactions.",
    tech: ["/next-2.png", "/tailwindcss.png", "/typescript.png", "/shadcn.png"],
  },
  {
    name: "Cedofinance",
    src: "/images/cedofinance.jpg",
    desc: "Project management dashboard with real-time analytics.",
    tech: ["/next-2.png", "/tailwindcss.png", "/typescript.png", "/sanity.png"],
  },
  {
    name: "AI Professional e-book & e-videos",
    src: "/images/ai-professional.jpg",
    desc: "E-learning platform with gamified reward system.",
    tech: [
      "/next-2.png",
      "/tailwindcss.png",
      "/typescript.png",
      "/firebase.png",
    ],
  },
  {
    name: "MAHA e-commerce and OMS",
    src: "/images/maha.jpg",
    desc: "Social sports app to connect padel players nearby.",
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
  },
  {
    name: "Resume Spark CV maker & ATS Checker",
    src: "/images/resume-spark.jpg",
    desc: "Analytics dashboard built with React, Tailwind CSS, and Syncfusion components.",
    tech: [
      "/next-2.png",
      "/tailwindcss.png",
      "/typescript.png",
      "/react-pdf.png",
    ],
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
                <img
                  src={project.src}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-all duration-500
                    ${isActive ? "filter-none" : "filter"}
                  `}
                />

                {/* Overlay description + tech icons */}
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

                  {/* Tech Stack Icons */}
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
