import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StatsCard from "../components/StatsCard";

export default function UserPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://mcsrranked.com/api/users/${username}`);
        const data = await res.json();
        if (data.status === "success") {
          setUserData(data.data); // <-- only the inner 'data' object
        } else {
          setUserData(null);
        }
      } catch (err) {
        console.error(err);
        setUserData(null);
      }
    };
    fetchUser();
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Search bar at top */}
      <SearchBar initialValue={username} />

      {/* Stats card */}
      {userData ? (
        <StatsCard data={userData} />
      ) : (
        <div className="flex justify-center items-center mt-16">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
