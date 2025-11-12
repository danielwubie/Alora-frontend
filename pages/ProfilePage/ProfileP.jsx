// src/pages/ProfilePage/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../ProfilePage/ProfileP.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate=useNavigate()
useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    console.log('oooo');
    
    if (!token) return navigate("/login");
    console.log('llll');

    try {
      const response = await axios.get(`http://127.0.0.1:5000/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error,'error');
      
      setError("Failed to load user info: " + error.message);
      console.log("the hhhhahahah")
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  fetchUser();
}, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/"; // redirect after logout
  };


  if (error) return <p>{error}</p>;

  return (loading ?   <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <CircularProgress sx={{color:"black"}}/>
      </div>:
    <div className={styles.container}>
     <div className={styles.container2}>
       <AccountCircleIcon sx={{
        
        fontSize: 170,
        color: "#8e7e67",
         '@media (max-width: 412px) ': {
     fontSize: 100,
    },
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
