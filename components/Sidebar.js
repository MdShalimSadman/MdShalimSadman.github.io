import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import {CiMail} from "react-icons/ci";

const Sidebar = () => {
  const socialMediaLinks = [
    {
      icon: <FaFacebook size={25}/>,
      link: "https://www.facebook.com/profile.php?id=100006286577524",
    },
    {
      icon: <FaLinkedin size={25}/>,
      link: "https://www.linkedin.com/in/md-shalim-sadman/",
    },
    {
        icon: <FaGithub size={25}/>,
        link: "https://github.com/MdShalimSadman",
    },
    {
        icon: <CiMail size={25}/>,
        link: "mailto:shalimsadmandipro3@gmail.com",
    },
    {
        icon: <FaWhatsapp size={25}/>,
        link: "https://wa.me/+8801854288385",
    },
    
  ];

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-0 h-55 w-10 bg-gray-900 flex flex-col items-center justify-center">
      {socialMediaLinks.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300 mb-2 mt-2"
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
