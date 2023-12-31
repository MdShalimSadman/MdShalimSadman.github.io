import React, { useEffect, useState } from 'react';

export default function Title() {
  const [typedText, setTypedText] = useState('');
  const textToType = 'WEB DEVELOPER';
  let index = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText(textToType.substring(0, index));
      index++;
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full px-8">
      <img src="/images/mypic.jpg" alt="A sample image" className="w-full max-w-md mt-9 rounded-lg mr-5" />
      <div className="text-white ml-9">
        <h1 className="text-6xl font-bold">
          MD SHAL<span className="text-blue-400 animate-pulse">I</span>M
          SA<span className="text-blue-400 animate-pulse">D</span>MAN
        </h1>
        <p className="text-lg mt-5 animate-parallax">{typedText}</p>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .flex {
              flex-direction: column;
              align-items: center;
            }

            .text-white {
              text-align: center;
              margin-top: 2rem;
            }

            .w-full {
              max-width: auto; 
              margin-top: 1rem;
              order: -1;
            }

            .ml-9 {
              margin-left: 0;
              margin-top: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
