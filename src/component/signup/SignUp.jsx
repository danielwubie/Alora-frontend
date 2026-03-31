import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../signup/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../../services/authService";

function SignUp() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSignUp = async () => {
    try {
      await signUpWithEmail({
        name: Name,
        email: Email,
        password: Password,
      });

      navigate("/", {
        state: { toast: true, message: "âœ…account created succesfully" },
      });
    } catch (error) {
      console.error("SignUp failed:", error);
      alert("Invalid email or password");
    }
  };

  const handleClose = () => {
    navigate(-2);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={handleClose}
    >
      <div
        className={styles.contianer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.logobox}>
          <img src="src/assets/alora_Brand_Logo.png" className={styles.logo}></img>
        </div>

        <div className={styles.inputandtextbox}>
          <p className={styles.text}>Name</p>
          <div className={styles.inputbox}>
            <Box>
              <TextField
                fullWidth
                label="Name"
                id="Name"
                type="text"
                value={Name}
                sx={{ color: "white" }}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
          </div>
        </div>

        <div className={styles.inputandtextbox}>
          <p className={styles.text}>Email</p>
          <div className={styles.inputbox}>
            <Box>
              <TextField
                fullWidth
                label="Email"
                id="email"
                type="email"
                value={Email}
                sx={{ color: "white" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          </div>
        </div>
        <div className={styles.inputandtextbox}>
          <p className={styles.text}>Password</p>
          <div className={styles.inputbox}>
            <Box>
              <TextField
                fullWidth
                label="Password"
                id="password"
                type="password"
                value={Password}
                sx={{ color: "white" }}
                onChange={(p) => setPassword(p.target.value)}
              />
            </Box>
          </div>
        </div>
        <div className={styles.button_and_link}>
          <a
            onClick={() => navigate("/login", { replace: true })}
            style={{ cursor: "pointer" }}
          >
            Already have an  account? Login here
          </a>
          <Button
            sx={{
              mt: 2,
              color: "white",
              height: "62px",
              width: "183px",
              backgroundColor: "#C15A18",
            }}
            onClick={handelSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
