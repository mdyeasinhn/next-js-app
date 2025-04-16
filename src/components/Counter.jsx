"use client"
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Counter: {count}
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
