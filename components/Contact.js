import React, { useState, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import {toast} from 'sonner';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID; 
const TEMPLATE_ID_QUERY = process.env.NEXT_PUBLIC_TEMPLATE_ID_QUERY; // Template for you
const TEMPLATE_ID_REPLY = process.env.NEXT_PUBLIC_TEMPLATE_ID_REPLY; // Template for the user
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading]=useState(false);
  
  const form = useRef(); 

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  
  const handleSubmit = (e) => {
  e.preventDefault();

  setIsLoading(true);  

  if (!form.current) {
    console.error("Form reference not found.");
    setIsLoading(false);
    return;
  }

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID_QUERY, form.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(() => {
      return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_REPLY, form.current, {
        publicKey: PUBLIC_KEY,
      });
    })
    .then(() => {
      toast.success("Success! an email has been sent");
      resetForm();
      setIsLoading(false); 
    })
    .catch((error) => {
      toast.error("Something went wrong");
      setIsLoading(false); 
    });
};


  return (
    <>
      <section className="py-8 text-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-6xl md:font-bold text-3xl font-semiboldmb-9 text-center animate-slide-in-left">
            CON<span className="text-blue-300">T</span>ACT
          </h2>
        </div>
      </section>
      <div className='px-8'>
      <form
        ref={form} // 5. Attach the ref to the form
        onSubmit={handleSubmit} // 6. Attach the submit handler
        className="bg-gray-900 bg-opacity-50 border-6 border-blue-300 p-6 rounded-lg mx-auto max-w-md mb-8"
      >
        <div className="mb-4">
          <input
            type="text"
            // 7. Add 'name' attribute matching your template variable
            name="name" 
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Keep for controlled input if needed
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            // 7. Add 'name' attribute matching your template variable
            name="email" 
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Keep for controlled input if needed
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            // 7. Add 'name' attribute matching your template variable
            name="message" 
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Keep for controlled input if needed
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-transparent border border-white text-white hover:border-blue-400 hover:text-blue-400 rounded-lg px-4 py-2 flex items-center transition-colors duration-300 mx-auto"
          >
            <AiOutlineSend className="mr-2 hover:text-blue-400" />
           
            {isLoading?"Sending...":" Send Queries"}
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default ContactForm;