import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../login/Login.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmail } from "../../services/authService";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmail({
        email: Email,
        password: Password,
      });

      navigate("/", {
        state: { toast: true, message: "✅Loggedin succesfully" },
      });
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password");
    }
  };

  const handleClose = () => {
    navigate("/");
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
            className={styles.link_to_signup}
            onClick={() => navigate("/signup", { replace: true })}
            style={{ cursor: "pointer" }}
          >
            Create new account?
          </a>
          <Button
            disableRipple
            sx={{
              mt: 2,
              color: "white",
              height: "62px",
              width: "183px",
              backgroundColor: "#C15A18",
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:focus-visible": { outline: "none", boxShadow: "none" },
            }}
            className={styles.btn}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
