import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
// Assume you create a CSS module for styling

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile");
        setLoading(false);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1">
        Email: {userData.email}
      </Typography>
      {/* Add more fields as needed, e.g., name, etc., based on your backend response */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}