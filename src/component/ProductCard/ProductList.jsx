import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "../ProductCard/productCard";
import { Typography, Box, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function ProductList({ transform, title, info, mode = "all", config, }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
const BASE_URL=import.meta.env.VITE_BASE_URL
  useEffect(() => {
    if (mode == "all") {

      axios
        .get(`${BASE_URL}/product`)
        .then((res) => {
         
          setProducts(res.data.products);
          setLoading(false);
        })
        
    } else if (mode == "catag") {
      axios
        .get(`${BASE_URL}/product/categories/${config}`)
        .then((res) => {
         
          setProducts(res.data.products);
          setLoading(false);
        })
       
    } else if (mode == "sub") {
      axios
        .get(`${BASE_URL}/product/by_subcategory/${config}`)
        .then((res) => {
          
          setProducts(res.data.products);
          setLoading(false);
        })
        
    }
  }, [mode, config]);

  const finalList = transform ? transform(products) : products;

  return (
    loading ?   <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <CircularProgress sx={{color:"black"}}/>
    </div>:
    <Box sx={{ p: 3 }}>
        
      {/* Rugs Section */}
      <Typography variant="h4" sx={{ mb: 2, fontWeight:500 ,color:"#3d2914",fontSize:20,fontFamily:"system-ui", textAlign:"center"}}>
        {title}
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            color: "#6b5b47",
            fontSize: 16,
            fontFamily: "system-ui",
            fontWeight: 400,
          }}
        >
          {info}
        </Typography>
      </Typography>
      <Box sx={{ display:"flex",justifyContent:"center"}}>

      <Grid container spacing={3} justifyContent="center" >
          {finalList.map((item) => {
            
            return  <MyCard key={item.id} {...item} /> 
          })}
      </Grid>
      </Box>

     

      
    
    </Box>

  );
}

export default ProductList;
