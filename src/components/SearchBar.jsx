import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ initialValue = "" }) {
  const [username, setUsername] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      navigate("/" + username.trim());
      setUsername("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center p-4 bg-gray-900"
    >
      <input
        type="text"
        placeholder="Search username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full max-w-md p-2 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-r-md"
      >
        Search
      </button>
    </form>
  );
}
