import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../CartCard/card.module.css";
export default function Cart({ item, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const BASE_URL=import.meta.env.VITE_BASE_URL
  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
    const token = localStorage.getItem("token");
    axios.put(
      `${BASE_URL}/cart/update`,
      { productId: item.product_id, quantity: newQuantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  const handleRemove = () => {
    const token = localStorage.getItem("token");
    axios.delete(`${BASE_URL}/cart/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { "productId": item.product_id },
    }).then(() => {
      onRemove(item.product_id);
    })
  };
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        
        position: "relative",
        p: 1,
        backgroundColor: "#faf8f4",
        gap: 1
      }}
      className={styles.card}
    >
      <CardMedia
  component="img"
  sx={{ width: 96, height: 96, borderRadius: 5 }}
  image={item.Product.image}
  alt={item.Product.name}
/>
      <CardContent
        sx={{ flex: "1 0 auto", ml: 2 }}
        className={styles.contentbox}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: 200,
            justifyContent: "start",
             '@media (max-width: 599px)': {
      width:130,
    },
    
          }}
          className={styles.cardbox}
        >
          <Box
            sx={{ display: "flex", gap: 1 }}
            className={styles.cardbox2}
          >
            <Typography
             variant="h6"
             sx={{
                maxWidth: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
              }}
            >
              {item.Product.name}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", gap: 1 }}
            className={styles.cardbox2}
          >
            <Typography 
            variant="subtitle2" 
            color="text.secondary"
            sx={{
                maxWidth: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
              }}
              title={item.Product.description}
            >
              {item.Product.description}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            className={styles.cardbox}
          >
            <IconButton
              size="small"
              onClick={() => handleQuantityChange(-1)}
              disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: "none",
                },
                fontSize: 29,
              }}
            >
              <RemoveIcon
                sx={{ fontSize: 29 }}
                className={styles.IconButton}
              />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton
              size="small"
              onClick={() => handleQuantityChange(1)}
              disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <AddIcon
                sx={{ fontSize: 29 }}
                className={styles.IconButton}
              />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <IconButton
        aria-label="delete"
        disableRipple
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <DeleteForeverIcon
          onClick={handleRemove}
          sx={{ color: "#6f5d45", fontSize: 35 }}
          className={styles.IconButtonDelete}
        />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1,
          mb: 1,
          flexDirection: "column",
        }}
      >
        <Typography className={styles.PriceTotal} variant="h6">
          ${(item.Product.Price * quantity).toFixed(2)}
        </Typography>
        <Typography className={styles.PriceEach} variant="h6">
          ${item.Product.Price.toFixed(2)} each
        </Typography>
      </Box>
    </Card>
  );
}