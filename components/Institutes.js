import { useState } from "react";

const images = [
  {
    src: "/images/neovotech.jpg",
    companyName: "Neovotech",
    position: "Web Developer Intern",
    duration: "Feb 2023 - Present",
  },
  {
    src: "/images/mozilla.jpg",
    companyName: "Mozilla",
    position: "Contributor at Localization",
    duration: "2021 - Present",
  },
  {
    src: "/images/firefoxAiub.png",
    companyName: "Firefox at AIUB",
    position: "Logistic Lead",
    duration: "2022 - Present",
  },
  {
    src: "/images/firefoxAiub.png",
    companyName: "Firefox at AIUB",
    position: "Logistic peer",
    duration: "2021 - 2022",
  },
  {
    src: "/images/computerClub.jpg",
    companyName: "AIUB Computer Club",
    position: "General Member",
    duration: "2020 - Present",
  },
  {
    src: "/images/itclub.jpg",
    companyName: "BAF Shaheen College Dhaka IT Club",
    position: "Secretary of Event Maintenance",
    duration: "2018-2019",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="py-8 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-9 text-center animate-slide-in-left">
            PR<span className="text-blue-300">O</span>FESSIONAL 
            <span className="text-blue-300"> & </span> 
            VOLUN<span className="text-blue-300">T</span>EERING
            E<span className="text-blue-300">X</span>PERIENCES
          </h2>
        </div>
      </section>

      <table className="w-full border border-blue-300 shadow-lg" style={{ tableLayout: 'fixed' }}>
        <tbody>
          {images.map((image, index) => (
            index % 3 === 0 && (
              <tr key={index}>
                {images.slice(index, index + 3).map((data, i) => (
                  <td
                    key={index + i}
                    className="p-4 text-center border border-blue-300"
                    style={{ width: '33.33%' }}
                  >
                    <div>
                      <img src={data.src} alt={`image-${index}`} className="h-40 mx-auto mb-4" />
                      <h4 className="text-lg font-bold mb-2 text-white">{data.companyName}</h4>
                      <p className="text-sm text-white">{data.position}</p>
                      <p className="text-sm text-white">{data.duration}</p>
                    </div>
                  </td>
                ))}
              </tr>
            )
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Gallery;
