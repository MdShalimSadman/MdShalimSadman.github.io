import React, { useEffect, useState } from 'react';
import Title from '@/components/Title';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Institutes from '@/components/Institutes';
import Certificates from '@/components/certificates';
import Contact from '@/components/Contact';
import Sidebar from '@/components/Sidebar'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {

 
  const contactRef = useRef(null);

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

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [aboutMeRef, aboutMeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [institutesRef, institutesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative bg-[#132E52] overflow-x-hidden">
      <video className="fixed top-0 left-0 w-screen h-full object-cover z-0 opacity-50" autoPlay loop muted >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <Navbar />
       
        <div className="py-10" ref={titleRef} >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.3 }}
          >
            <Title />
          </motion.div>
        </div>
        <div className="py-12" ref={aboutMeRef} id="aboutMeRef">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={aboutMeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1.3 }}
          >
            <AboutMe />
          </motion.div>
        </div>
        <div className="py-8" ref={skillsRef} id="skillsRef">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.3 }}
          >
            <Skills />
          </motion.div>
        </div>
        <div className="py-8" ref={projectsRef} id="projectsRef">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1.3 }}
          >
            <Projects />
          </motion.div>
        </div>
        <div className="py-8 mt-7" ref={institutesRef} id="institutesRef">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={institutesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.3 }}
          >
            <Institutes />
          </motion.div>
        </div>
        {/* <Certificates/> */}
        <div className="py-8" ref={contactRef} id="contactRef">
          <Contact />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
