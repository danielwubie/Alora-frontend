import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import styles from "../signup/SignUp.module.css"
import axios from "axios";

function SignUp(){
    const[Name,setName]=useState("")
    const [Email, setEmail]=useState("")
    const [Password, setPassword]=useState("")

    const handelSignUp= async () => {
        try {
             const response= await axios.post("http://127.0.0.1:5000/users/signUp",{
                            name: Name,
                            email: Email,
                            password: Password,
                        });
                        const token = response.data.result.token;
                        localStorage.setItem("token", token);
                        console.log("SignUp successful:", response.data);
        } catch (error) {
            console.error("SignUp failed:", error);
      alert("Invalid email or password");
        }
    }
     return (
    <>
    <div className={styles.contianer}>
        <div className={styles.logobox}> 
            <img src="src/assets/alora_Brand_Logo.png" className={styles.logo}></img>
        </div>
        

        <div className={styles.inputandtextbox}> 
            <p className={styles.text}>Name</p>
            <div className={styles.inputbox}>
                <Box sx={{ width: 381}}>
                    <TextField fullWidth label="Name" id="Name" type="Name"  value={Name} sx={{color:"white"}} onChange={(e)=>setName(e.target.value)} />
                </Box>
            </div>
        </div>

        <div className={styles.inputandtextbox}> 
            <p className={styles.text}>Email</p>
            <div className={styles.inputbox}>
                <Box sx={{ width: 381}}>
                    <TextField fullWidth label="Email" id="email" type="email"  value={Email} sx={{color:"white"}} onChange={(e)=>setEmail(e.target.value)} />
                </Box>
            </div>
        </div>
        <div className={styles.inputandtextbox}> 
            <p className={styles.text}>Password</p>
            <div className={styles.inputbox}>
                <Box sx={{ width: 381}}>
                    <TextField fullWidth label="Password" id="password" type="password" value={Password} sx={{color:"white"}} onChange={(p)=>setPassword(p.target.value)} />
                </Box>
            </div>
        </div>
        <div className={styles.button_and_link}>
            <a className={styles.link_to_signup}>Already have an  account? Login here</a>
            <Button  sx={{ mt: 2,color: "white", height:"62px",width:"183px",backgroundColor:"#C15A18"} } onClick={handelSignUp}>
                Sign Up
            </Button>
        </div>
    </div>

    </>
    
)
}

export default SignUp;