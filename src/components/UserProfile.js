
const UserProfile = (userData) => {
if(!userData){
  return <p>Loading...</p>
}else{
  return(
    <div className="user-profile">
<img src={userData.picture.large} alt="User Name"/>
<h2>User Name</h2>
<p>Email: {userData.email}</p>
<p>Phone Number: {userData.phone}</p>
<p>Location: {userData.location.city}, {userData.location.country}</p>
    </div>
  )
}
}

export default UserProfile;
