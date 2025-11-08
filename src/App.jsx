import React from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SearchBar />
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-4xl font-bold">Welcome to MCSR Ranked Stats!</h1>
        <p className="mt-4 text-gray-300">
          Use the search bar above to find a player.
        </p>
      </div>
    </div>
  );
}
