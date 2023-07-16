import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <section className="py-8 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-9 text-center animate-slide-in-left">
            CON<span className="text-blue-300">T</span>ACT
          </h2>
        </div>
      </section>
      <form
        className="bg-gray-900 bg-opacity-50 border-6 border-blue-300 p-6 rounded-lg mx-auto max-w-md mb-8"
      >
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={name}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            placeholder="Email"
            value={email}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full bg-transparent border border-blue-200 text-white py-2 px-3 placeholder-white focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Message"
            value={message}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent border border-white text-white hover:border-blue-400 hover:text-blue-400 rounded-lg px-4 py-2 flex items-center transition-colors duration-300 mx-auto"
          >
            <AiOutlineSend className="mr-2 hover:text-blue-400" />
            Send Queries
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
