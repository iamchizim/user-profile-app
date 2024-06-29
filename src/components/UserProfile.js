import React from "react";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserdata = async (user) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserdata(user);
  }, [user]);

  return (
    <div className="user-details">
     <h1>User Profile</h1>
   
     {loading && <p>Loading...</p>}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && !error && userData && (
        <UserProfile userData= {userData}/>)}
      <img src= {user.picture.large}/>
        <p>Email: {userData.email}</p>
        <p>Phone Number: {user.phone}</p>
        <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
 
  )
};
