import { useState } from "react";

// ========================
// EXPERIENCE DATA
// ========================
const images = [
  {
    src: "/images/mozilla.jpg",
    companyName: "Mozilla Firefox",
    position: "Contributor",
    duration: "Feb 2022 - Jan 2023",
    roles: ["Contributed in the topic localization", "Translated 44 sentences"],
    url: "https://pontoon.mozilla.org/contributors/Th8lxDH6mYnt_a3S75R0J07CZEI/?fbclid=IwAR1KlpWmMzrI7_REp8jlrsnI-V-n1blSe1uFcM6spTRAIvfpDhCwhiSVwO8",
  },
  {
    src: "/images/computerClub.jpg",
    companyName: "AIUB Computer Club",
    position: "General Member",
    duration: "Jan 2020 - October 2022",
    roles: [
      "Collaborated with research and development team.",
      "Became logistic lead of Firefox at AIUB, a wing of AIUB Computer Club.",
    ],
    url: "https://aiubcc.org/",
  },
  {
    src: "/images/firefoxAiub.png",
    companyName: "Firefox @ AIUB",
    position: "Logistic Lead",
    duration: "Nov 2022 - Nov 2023",
    roles: [
      "Organized workshops on different topics of mozilla firefox",
      "Hosted the event 'Moz Code'",
    ],
    url: "https://wiki.mozilla.org/Firefox_at_AIUB",
  },
];

const Club = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFlip = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="text-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-6xl md:font-bold text-3xl font-semiboldmb-9 text-center animate-slide-in-left">
            VO<span className="text-blue-300">L</span>UNTEERING E
            <span className="text-blue-300">X</span>PERIENCE
          </h2>
        </div>
      </section>

      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    See Organization Details →
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

export default Club;
