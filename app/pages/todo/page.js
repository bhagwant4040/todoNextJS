"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todo");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      // Ensure that todos are valid objects
      const validTodos = parsedTodos.filter(todo => todo && typeof todo === 'object' && 'title' in todo);
      setTodos(validTodos);
    }
  }, []);

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos)); // Update localStorage
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos)); // Update localStorage
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Your Todos</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Your todos are here</p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {todos.length > 0 ? ( // Check if there are todos to display
            todos.map((todo, index) => (
              todo ? ( // Check if the todo is not null or undefined
                <div key={index} className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                  <div className="border rounded-lg p-4 flex flex-col justify-between h-full">
                    <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                      {todo.title || "Untitled Todo"} {/* Fallback in case title is undefined */}
                    </h2>
                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                      <a onClick={() => toggleTodo(index)} className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          {todo.completed && (
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          )}
                        </span>
                        {todo.title || "Untitled Todo"} {/* Fallback in case title is undefined */}
                      </a>
                      <button onClick={() => removeTodo(index)} className="text-red-500 hover:text-red-700 mt-2">
                        Remove
                      </button>
                    </nav>
                  </div>
                </div>
              ) : null // If todo is null, render nothing
            ))
          ) : (
            <p className="text-center text-gray-500">No todos available</p> // Message if no todos
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Todos; // Use default export 