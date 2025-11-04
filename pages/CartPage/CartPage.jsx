import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import Cart from "../../component/CartCard/Cart";

const CartPage = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/"); // goes to homepage
  };

  const handleContinueShopping = () => {
    navigate("/"); // also goes to homepage or previous page
  };


  return (
    <div className={styles.container}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ alignSelf: "flex-start", mb: 2 }}
      >
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={handleContinueShopping}
          sx={{
            color: "rgb(61, 41, 20)",
            textTransform: "none",
            "&:hover": { backgroundColor: "#d4c4a8" },
            fontWeight: "600",
            fontSize: 15,
            "&:focus": { outline: "none", boxShadow: "none" },
            "&:focus-visible": { outline: "none", boxShadow: "none" },
          }}
        >
          Continue Shopping
        </Button>

        <Typography className={styles.title} variant="body1" sx={{ color: "#3e2e1f" , fontSize: 24, fontWeight:700}}>
          Shopping Cart 
        </Typography>
      </Stack>
      

      <Box
        sx={{
          backgroundColor: "#fff7f0",
          borderRadius: 2,
          boxShadow: 2,
          p: 4,
          textAlign: "center",
          width: 820,
          height: "180px",
        }}
      >
        
        <Typography variant="h4" gutterBottom sx={{ color: "#3e2e1f", fontSize: 20 ,fontWeight:400}}>
          Your Cart
        </Typography>

        <Typography variant="body1" sx={{ color: "#3e2e1f", mb: 3 }}>
          You haven’t added any items yet. Browse the menu and add something you love!
        </Typography>   

        <Button
          variant="contained"
          onClick={handleStartShopping}
          sx={{
            backgroundColor: "#8b4513",
            "&:hover": { backgroundColor: "#a36a42ff" },
            borderRadius: 3,
            px: 3,
            py: 1,
            "&:focus": { outline: "none", boxShadow: "none" },
            "&:focus-visible": { outline: "none", boxShadow: "none" },
          }}
        >
          Start Shopping
        </Button>
      </Box>
    </div>
  );
};

export default CartPage;
