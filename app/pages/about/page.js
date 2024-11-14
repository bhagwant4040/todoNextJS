"use client"; // Add this line

import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [message, setMessage] = useState("Hello World");

  const changeMessage = () => {
      setMessage("Welcome to My First Next.js Project!");
  };

  return (
    <div className='my-8 mx-auto max-w-3xl text-center'>
      <h1 className="text-4xl font-bold mb-4">About This Project</h1>
      <p className="text-lg mb-6">
        Welcome to my first Next.js project! 🎉
      </p>
      <p className="text-base mb-4">
        This project is a simple Todo List application that allows users to add tasks and manage their daily schedules. 
        I built this application to learn the fundamentals of Next.js, a powerful React framework that enables server-side rendering, static site generation, and many other advanced features.
      </p>
      <p className="text-base mb-4">
        Throughout this project, I explored various concepts, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Creating components and managing state with React hooks.</li>
        <li>Using local storage to persist user data.</li>
        <li>Implementing responsive design with Tailwind CSS.</li>
        <li>Understanding routing and navigation in Next.js.</li>
      </ul>
      <p className="text-base mb-4">
        I hope this project serves as a solid foundation for my future endeavors in web development. 
        I am excited to continue learning and building more complex applications with Next.js and other modern web technologies.
      </p>
      
      {/* HelloWorld Component */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">{message}</h2>
        <button 
            onClick={changeMessage} 
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
        >
            Change Message
        </button>
      </div>

      <Link href="/" className="text-indigo-500 hover:underline mt-6 block">
        Back to Home
      </Link>
    </div>
  );
}