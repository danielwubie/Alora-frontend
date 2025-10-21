import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "../ProductCard/productCard";
import { Typography, Box, Grid } from "@mui/material";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => {
        console.log("Fetched products:", res.data.products);
         setProducts(res.data.products);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  
 

  return (
    <Box sx={{ p: 3 }}>
        
      {/* Rugs Section */}
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        explore
      </Typography>
      <Grid container spacing={2}>
        {products.map((item) => (
            <MyCard key={item.id} {...item} />
        ))}
      </Grid>

     

      
    
    </Box>
  );
}

export default ProductList;
