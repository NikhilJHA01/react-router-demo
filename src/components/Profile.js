import React from "react";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logOut();
  };
  return (
    <>
      <div>Profile</div>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Profile;
