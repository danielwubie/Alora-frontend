import * as React from 'react';

import Box from '@mui/material/Box';

import styles from "../heroposter/Heroposter.module.css"
import Button from "@mui/material/Button";

export default function Heroposter() {
  return (
    
    
      
        <Box sx={{ bgcolor: '#376992ff', height: '599px' ,width:"100vw" }} className={styles.box} >
            <div className={styles.contentbox}>
           <h3 className={styles.title}>Discover Your Style</h3>
           <p className={styles.description}>From fashion to home essentails, find everything you need in one place Quality product, exceptional style, unbeatable price</p>
           <div className={styles.buttonbox}>
            <Button sx={{ mt: 2,color: "black",backgroundColor:"#f5f1eb",width:"132px",height:"40px"} } className={styles.button}>
                shop men
            </Button>
            <Button sx={{ mt: 2,color: "black",backgroundColor:"#f5f1eb",width:"132px",height:"40px"} } className={styles.button}>
                shop women
            </Button>
           </div>
           </div>
        </Box>
    

  );
}