// frontend/src/components/Candy.js
import React from "react";

const Candy = ({ candy }) => {
  if (candy.size === 0) {
    return (
      <div className="bg-white shadow-md rounded p-4 text-center">
        <p className="text-xl text-purple-700 mb-4">
          Candy {candy.id}: {candy.size}
        </p>
        <p className="text-red-500">All licked up!</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <p className="text-xl text-purple-700 mb-4">
        Candy {candy.id}: {candy.size}
      </p>
      <div className="flex justify-center items-center bg-blue-100">
        <div className="relative w-48 h-48 bg-pink-500 rounded-full flex justify-center items-center shadow-lg">
          <div className="absolute w-48 h-48 bg-pink-400 rounded-full"></div>
          <div className="absolute w-32 h-32 bg-pink-500 rounded-full"></div>
          <div className="w-24 h-24 bg-pink-300 rounded-full"></div>
          <div className="absolute w-16 h-16 bg-pink-600 rounded-full"></div>
          <div className="absolute w-8 h-8 bg-pink-400 rounded-full"></div>
          <div className="absolute w-4 h-4 bg-pink-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Candy;
