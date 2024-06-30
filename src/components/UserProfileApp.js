import React from "react";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

const UserProfileApp = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        setLoading(true)
        setError(null);
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data.results[0]);
        setLoading(false)
      } catch (error) {
        setError(error.message);
        setUserData(null);
      }
     
    };
    fetchUserdata();
  }, []);
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }

  return (
    <div className="user-details">
      <h1>User Profile</h1>
     {userData && <UserProfile userData={userData} />} 
    </div>
  );
};
export default UserProfileApp;
