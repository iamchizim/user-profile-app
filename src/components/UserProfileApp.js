import React from "react";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

const UserProfileApp = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        setError(error.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserdata(userData);
  }, []);

  return (
    <div className="user-details">
      <h1>User Profile</h1>
      <UserProfile userData={userData} />
    </div>
  );
};
export default UserProfileApp;
