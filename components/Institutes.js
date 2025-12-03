import { useState } from "react";

// ========================
// EXPERIENCE DATA
// ========================
const images = [
  {
    src: "/images/neovotech.jpg",
    companyName: "Neovotech",
    position: "Software Engineer (Frontend)",
    duration: "Oct 2023 - Present",
    roles: [
      "Worked on 7+ responsive web and mobile apps, fixing layout and performance issues with Next.js, Tailwind CSS, and React Native.",
      "Managed Git workflows for smooth team collaboration.",
      "Delivered features using Agile/Kanban, resolving integration issues, and improving prioritization.",
    ],
    url: "https://www.neovotech.com/",
  },
  {
    src: "/images/anwar.jpg",
    companyName: "Anwar Technologies- Anwar Group of Industries",
    position: "Web Developer Intern",
    duration: "Jul 2023 - Oct 2023",
    roles: [
      "Developed responsive web apps and fixed cross-browser UI issues with Angular, SCSS, and Bootstrap.",
      "Delivered pixel-perfect designs while managing Git/GitLab version control.",
      "Enhanced ERP modules by troubleshooting and collaborating with cross-functional teams.",
    ],
    url: "https://www.anwargroup.com/business-technology.html",
  },
];

// ========================
// FLIP CARD COMPONENT
// ========================
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFlip = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="text-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-6xl md:font-bold text-3xl font-semiboldmb-9 text-center animate-slide-in-left">
            E<span className="text-blue-300">X</span>PERIENCE
          </h2>
        </div>
      </section>

      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((data, index) => (
            <div
              key={index}
              className="relative w-full h-80 cursor-pointer perspective"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                  activeIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div
                  className="absolute w-full h-full backface-hidden bg-gray-900 bg-opacity-50 border border-blue-500 p-8 rounded-lg flex flex-col items-center justify-center text-white
  group transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-55 hover:border-blue-300"
                >
                  <img
                    src={data.src}
                    alt={data.companyName}
                    className="h-40 mb-4 transform transition-all duration-500 group-hover:scale-110 rounded-md"
                  />
                  <h3 className="text-lg font-bold mb-2">{data.companyName}</h3>
                  <p className="text-sm !m-0">{data.position}</p>
                  <p className="text-sm !m-0">{data.duration}</p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 bg-opacity-50 border border-blue-400 p-8 rounded-lg flex flex-col justify-between text-white transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-90 hover:border-blue-300">
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      My Roles & Contributions
                    </h3>

                    <ul className="text-sm space-y-1">
                      {data.roles.map((role, idx) => (
                        <li key={idx}>• {role}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white text-white hover:border-blue-400 hover:text-blue-400 rounded-lg px-4 py-2 flex items-center transition-colors duration-300 mx-auto"
                    onClick={(e) => e.stopPropagation()} // prevent flipping
                  >
                    See Company Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom 3D utilities */}
      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </>
  );
};

export default Gallery;
