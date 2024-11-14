"use client"; // Add this line

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  const [Todo, setTodo] = useState({ title: "" });

  const addTodo = () => { 
    let todo = localStorage.getItem("todo");
    if (todo) {
      let todoJson = JSON.parse(todo);
      todoJson.push({ ...Todo, completed: false }); // Add completed property
      localStorage.setItem("todo", JSON.stringify(todoJson));
    } else {
      localStorage.setItem("todo", JSON.stringify([{ ...Todo, completed: false }])); // Initialize with an array
    }
    console.log("Todo added:", Todo.title); // Log the title to the console
    alert("Todo has been added");
    setTodo({ title: "" }); // Clear the input field after adding
  };

  return (
    <div className='my-2 font-bold text-3xl'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">ADD A TODO</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Write today's schedule according to their importance.</p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="add-task" className="leading-7 text-sm text-gray-600">Add a task</label>
              <input 
                value={Todo.title}
                onChange={(e) => setTodo({ title: e.target.value })} // Update state on input change
                type="text" 
                id="add-task" 
                name="add-task" 
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-normal"
              />
            </div>
            <button onClick={addTodo} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Add TODO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 