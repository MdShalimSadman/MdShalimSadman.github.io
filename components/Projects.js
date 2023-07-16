import { useState } from "react";

const images = [
  {
    src: "/images/sunrises.jpg",
    link: "https://www.sunrises.se/",
  },
  {
    src: "/images/laddat.jpg",
    link: "https://www.laddatklart.se/",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="py-8 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-9 text-center animate-slide-in-left">
            PRO<span className="text-blue-400">J</span>ECTS
          </h2>
        </div>
      </section>

      <div className="flex flex-wrap overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 overflow-hidden md:my-2 md:px-2"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`image-${index}`}
                className={`${activeIndex === index ? "scale-150" : "scale-100"} transform transition-all duration-500`}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
