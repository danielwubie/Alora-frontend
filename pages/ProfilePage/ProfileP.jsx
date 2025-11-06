// src/pages/ProfilePage/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../ProfilePage/ProfileP.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate=useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://127.0.0.1:5000/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).catch(()=>{
          console.log("😁😁😁💕")
          navigate("/login")
        });
console.log(response.data.user)
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
    window.location.href = "/"; // redirect after logout
  };

  if (loading) return <p>Loading user info...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
     <div className={styles.container2}>
       <AccountCircleIcon sx={{
        
        fontSize: 170,
        color: "#8e7e67"
      }}/>
      <div className={styles.container3}>
      <p className={styles.text}>Name: {user.name}</p>
      <p className={styles.text}>Email: {user.email}</p>
      <button className={styles.btn} onClick={handleLogout}>Logout</button>
      </div>
      
     </div>
    </div>
  );
};

export default ProfilePage;
