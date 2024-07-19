// frontend/src/App.js
import React, { useState, useEffect } from "react";
import Candy from "./components/Candy";
import { getCandies, lickCandies, biteCandies } from "./api";

function App() {
  const [candySet, setCandySet] = useState({ id: 1, candies: [] });
  const [biteable, setBiteable] = useState(true);

  useEffect(() => {
    loadCandies(1);
  }, []);

  const loadCandies = async (candySetId) => {
    const data = await getCandies(candySetId);
    if (data.error) {
      alert(data.error);
      return;
    }
    setCandySet(data);
    setBiteable(true);
  };

  const handleLick = async () => {
    const data = await lickCandies(candySet.id);
    setCandySet(data);
    setBiteable(true);
  };

  const handleBite = async () => {
    const data = await biteCandies(candySet.id, true);
    if (data.error) {
      alert(data.error);
      setBiteable(false);
      return;
    }
    setCandySet(data);
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Virtual Candy Store
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {candySet.candies.map((candy) => (
          <Candy key={candy.id} candy={candy} />
        ))}
      </div>
      {candySet.candies.every((candy) => candy.size === 0) ? (
        <button
          onClick={() => loadCandies(candySet.id + 1)}
          className="mt-8 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Load More Candy
        </button>
      ) : (
        <>
          <button
            onClick={handleLick}
            className="mt-8 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Lick All Candies
          </button>
          <button
            onClick={handleBite}
            disabled={!biteable}
            className="mt-8 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 disabled:bg-gray-400"
          >
            Bite All Candies
          </button>
        </>
      )}
    </div>
  );
}

export default App;
