import React from "react";

const UserProfile = (props) => {
  const { userData } = props;

  // Check if any necessary user data is missing
  if (
    !userData ||
    !userData.name||
    !userData.picture ||
    !userData.email ||
    !userData.location ||
    !userData.picture.large ||
    !userData.location.country ||
    !userData.location.city
  ) {
    return <p>Loading...</p>;
  }

  // Destructure the necessary fields from userData
  const { name, picture, email, phone, location } = userData;
  const { large } = picture;
  const { city, country } = location;

  return (
    <div className="user-profile">
      <img src={large} alt="User Name" />
      <h2>Name: {name.title} {name.first} {name.last}</h2>
      <p>Email: {email}</p>
      <p>Phone Number: {phone}</p>
      <p>
        Location: {city}, {country}
      </p>
    </div>
  );
};

export default UserProfile;
