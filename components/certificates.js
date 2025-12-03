'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const featuredItems = [
  {
    id: 'california',
    name: 'California',
    logo: (
      <Image
        src="/images/california.png"
        alt="California"
        width={500}
        height={500}
        className="pointer-events-none h-8 w-auto select-none md:h-20"
      />
    ),
  },
  {
    id: 'CISCO',
    name: 'CISCO',
    logo: (
      <Image
        src="/images/cisco.png"
        alt="Cisco"
        width={500}
        height={500}
        className="pointer-events-none h-8 w-auto select-none md:h-20"
      />
    ),
  },
  {
    id: 'Edinburgh',
    name: 'Edinburgh',
    logo: (
      <Image
        src="/images/edinburg.png"
        alt="Edinburgh"
        width={500}
        height={500}
        className="pointer-events-none h-8 w-auto select-none md:h-20"
      />
    ),
  },
  {
    id: 'Leeds',
    name: 'Leeds',
    logo: (
      <Image
        src="/images/leeds.jpeg"
        alt="Leeds"
        width={500}
        height={500}
        className="pointer-events-none h-8 w-auto select-none md:h-20"
      />
    ),
  },
  {
    id: 'Google',
    name: 'Google',
    logo: (
      <Image
        src="/images/google.png"
        alt="Google"
        width={500}
        height={500}
        className="pointer-events-none h-10 w-auto select-none md:h-12"
      />
    ),
  },
  {
    id: 'Duke',
    name: 'Duke',
    logo: (
      <Image
        src="/images/Duke_University.svg"
        alt="Duke"
        width={500}
        height={500}
        className="pointer-events-none h-10 w-auto select-none md:h-12"
      />
    ),
  },
  {
    id: 'san diego',
    name: 'San Diego',
    logo: (
      <Image
        src="/images/san_diego.png"
        alt="San Diego"
        width={500}
        height={500}
        className="pointer-events-none h-10 w-auto select-none md:h-12"
      />
    ),
  },
  {
    id: 'IT training',
    name: 'IT training BD',
    logo: (
      <Image
        src="/images/it_training.jpg"
        alt="IT training"
        width={500}
        height={500}
        className="pointer-events-none h-8 w-auto select-none md:h-20"
      />
    ),
  },
];

const Certificate = () => {
  const [isHovered, setIsHovered] = useState(false);

  // duplicate for infinite scroll
  const duplicatedItems = [...featuredItems, ...featuredItems];

  const scrollStyle = {
    animation: 'scroll 40s linear infinite',
    animationPlayState: isHovered ? 'paused' : 'running',
  };

  return (
    <div className="mt-5 md:mt-7 px-2 lg:px-0">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="!flex">
          <div
            style={scrollStyle}
            className="!flex gap-8 md:gap-12 whitespace-nowrap"
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="inline-flex items-center gap-3 min-w-max"
              >
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
