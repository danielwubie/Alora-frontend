import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "../ProductCard/productCard";
import { Typography, Box, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function ProductList({ transform, title, info, mode = "all", config }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mode == "all") {
      axios
        .get("http://127.0.0.1:5000/product")
        .then((res) => {
          console.log("Fetched products:", res.data.products);
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching products:", err));
    } else if (mode == "catag") {
      axios
        .get(`http://127.0.0.1:5000/product/categories/${config}`)
        .then((res) => {
          console.log("Fetched products:", res.data.products);
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching products:", err));
    } else if (mode == "sub") {
      axios
        .get(`http://127.0.0.1:5000/product/by_subcategory/${config}`)
        .then((res) => {
          console.log("Fetched products:", res.data.products);
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, [mode, config]);

  const finalList = transform ? transform(products) : products;

  return (
    loading ?   <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <CircularProgress sx={{color:"black"}}/>
    </div>:
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "#3d2914",
          fontSize: 20,
          fontFamily: "system-ui",
        }}
      >
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

      <Grid container spacing={3}>
        {finalList.map((item) => {
          return <MyCard key={item.id} {...item} />;
        })}
      </Grid>
    </Box>

  );
}

export default ProductList;
