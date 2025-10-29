import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../CartCard/card.module.css"


export default function Cart() {
  const [Cart, setCart] = useState([]);
console.log("Cart items:", Cart);

  useEffect(() => {
    
    const token = localStorage.getItem("token");

  console.log("Token being sent:", token);

  if (!token) {
    console.log("No token found, skipping request");
    return;
  }

    axios
      .get("http://127.0.0.1:5000/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
  })
      
      .then((res) => {
        
       console.log("Full response:", res);
        console.log("Fetched Cart:", res.data.cart);
        
        setCart(
          res.data || []
        );
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  

  const handleQuantityChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
      
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

//   const calculateTotal = () => {
//     return Cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

  return (
    <Box sx={{ p: 2, maxWidth: 700, margin: "auto" }}>
      {Cart.length === 0 ? (
        <Typography variant="h6" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {Cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 164,
                    width: 819,
                    position: "relative",
                    p: 1,
                    backgroundColor: "#faf8f4"
                  }}
                  className={styles.card}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 96, height: 96, borderRadius: 5 }}
                    image={`http://127.0.0.1:5000/uploads/${item.Product.image}`}
                    alt={item.Product.name}
                  />

                 <CardContent sx={{ flex: "1 0 auto", ml: 2 }} className={styles.contentbox}>
                
                    <Box sx={{ display: "flex",flexDirection: "column",  
                    gap: 1 , width: 200 , justifyContent:"start"}}
                     className={styles.cardbox}
                    >
                        <Box sx={{ display: "flex",  gap: 1 }} className={styles.cardbox2}>
                            <Typography variant="h6">{item.Product.name}</Typography>
                            
                    </Box>
                    <Box sx={{ display: "flex",  gap: 1 }} className={styles.cardbox2}>
                    
                    <Typography variant="subtitle2" color="text.secondary">
                        {item.Product.description}
                    </Typography>
                    </Box>
                    <Box  sx={{ display: "flex", alignItems:"center",    gap: 1 ,}} className={styles.cardbox}>
                        <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}
                            disableRipple
                                sx={{
                                "&:focus": { outline: "none", boxShadow: "none" },
                                "&:focus-visible": { outline: "none", boxShadow: "none" },
                                
                                }}
                            >
                        <RemoveIcon className={styles.IconButton} />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}
                            disableRipple
                                sx={{
                                "&:focus": { outline: "none", boxShadow: "none" },
                                "&:focus-visible": { outline: "none", boxShadow: "none" },
                                }}
                            >
                        <AddIcon className={styles.IconButton} />
                        </IconButton>
                        </Box>
                    </Box>
                    </CardContent>

                  <IconButton
                    aria-label="delete"
                    onClick={() => handleRemove(item.id)}
                    disableRipple
                    sx={{ position: "absolute", top: 8, right: 8 ,"&:focus": { outline: "none", boxShadow: "none" },
                                "&:focus-visible": { outline: "none", boxShadow: "none" },}}
                  >
                    <DeleteForeverIcon  sx={{ color:"#6f5d45"}} className={styles.IconButtonDelete}/>
                  </IconButton>
                   <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 1 , flexDirection:"column"}}>
                    <Typography className={styles.PriceTotal} variant="h6">${ (item.Product.Price * item.quantity).toFixed(2) }</Typography>
                    <Typography className={styles.PriceEach} variant="h6">${item.Product.Price.toFixed(2)} each</Typography>
                    </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

         
        </>
      )}
    </Box>
  );
}
