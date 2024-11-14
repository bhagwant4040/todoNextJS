"use client"; // Add this line

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Load existing contacts from local storage when the component mounts
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(storedContacts);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = { name, email, message };
        const updatedContacts = [...contacts, newContact];

        // Save contacts to local storage
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setContacts(updatedContacts);
        setSubmitted(true);

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='my-8 mx-auto max-w-3xl text-center'>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            {submitted ? (
                <div className="text-lg mb-6">
                    <p>Thank you for your message, {name}! We will get back to you soon.</p>
                    {/* Remove the download button and related instructions */}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            )}
            <Link href="/" className="text-indigo-500 hover:underline mt-6 block">
                Back to Home
            </Link>
        </div>
    );
}