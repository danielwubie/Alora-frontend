import * as React from 'react';

import Box from '@mui/material/Box';

import styles from "../heroposter/Heroposter.module.css"
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Heroposter() {

    const navigate= useNavigate();

    const goToMens =()=>{
        navigate("/category/2")
    }
    const goToWomens =()=>{
        navigate("/category/1")
    }



  return (
    
    
      
        <Box sx={{ bgcolor: '#376992ff', height: '599px' ,width:"100vw" }} className={styles.box} >
            <div className={styles.contentbox}>
           <h3 className={styles.title}>Discover Your Style</h3>
           <p className={styles.description}>From fashion to home essentails, find everything you need in one place Quality product, exceptional style, unbeatable price</p>
           <div className={styles.buttonbox}>
            <Button 
            disableRipple
            sx={{ mt: 2,color: "black",backgroundColor:"#f5f1eb",width:"132px",height:"40px","&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },} }
             className={styles.button}
             onClick={goToMens}
             >
                shop men
            </Button>
            <Button 
            sx={{ mt: 2,color: "black",backgroundColor:"#f5f1eb",width:"132px",height:"40px","&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },} }
             className={styles.button}
             onClick={goToWomens}
             >
                shop women
            </Button>
           </div>
           </div>
        </Box>
    

  );
}