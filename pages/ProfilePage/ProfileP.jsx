// src/pages/ProfilePage/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../ProfilePage/ProfileP.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`http://127.0.0.1:5000/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

setUser(response.data.user);
      } catch (error) {
        setError("Failed to load user info",error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login"; // redirect after logout
  };

  if (loading) return <p>Loading user info...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
     <div className={styles.container2}>
       <AccountCircleIcon sx={{
        color:"black",
        fontSize: 170
      }}/>
      <div>
      <p className={styles.text}>{user.name}</p>
      <p className={styles.text}>{user.email}</p>
      <button className={styles.btn} onClick={handleLogout}>Logout</button>
      </div>
      
     </div>
    </div>
  );
};

export default ProfilePage;
