import React, { useEffect, useState } from 'react';

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex items-center justify-center mt-10 sm:mr-20 sm:ml-20 ${isVisible ? 'opacity-100 transition-opacity duration-8000' : 'opacity-0'}`}>
      <div className="flex flex-col items-center sm:ml-10 sm:mr-10">
        <p
          className="MuiTypography-root MuiTypography-body1 aos-init aos-animate ml-10 mr-10 text-gray-300 sm:ml-0 sm:mr-0 sm:text-justify lg:ml-20 lg:mr-20"
          data-aos="fade-down-right"
          data-aos-duration="2500"
          style={{ fontSize: '1.5rem' }}
        >
          <span style={{ color: 'skyblue', fontSize: '3.5rem', fontWeight: 'normal' }}>Hello!</span> I am MD. Shalim Sadman. I am a web development enthusiast and possess front-end development experience in the software industry. Additionally, I have volunteered with a renowned open-source organization, Mozilla. My expertise includes professional e-commerce website development, and I am highly skilled in exhibiting adaptability, event management, teamwork, and emotional intelligence. 
        </p>
      </div>
    </div>
  );
}
