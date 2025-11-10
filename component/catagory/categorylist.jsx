import React from "react";
import CatCard from "../catagory/categorycard";
import { Typography, Box, Grid } from "@mui/material";

// Your 3 images — from public/assets/
const IMAGES = [
  "/assets/art.jpg",
  "/assets/sophie_chair.jpg",
  "/assets/toy.jpg",
];

// Hardcoded 3 categories (you said you only need these)
const CATEGORIES = [
  {
    id: 2,
    name: "Arts & crafts",
    description: "everything about art and craft",
    image: IMAGES[0],
    path: "/category/42",
  },
  {
    id: 40,
    name: "Furniture",
    description: "all stuff",
    image: IMAGES[1],
    path: "/category/40",
  },
  {
    id: 41,
    name: "Toys & Games",
    description: "various",
    image: IMAGES[2],
     path: "/category/41",
  },
];

function CatList({ title = "Featured", info = "Picked items" }) {
  return (
    <Box sx={{ p: 3 }}>
        
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "#3d2914",
          fontSize: 20,
          fontFamily: "system-ui",
          paddingLeft:"40%",    
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: "#6b5b47",
          fontSize: 16,
          fontFamily: "system-ui",
          fontWeight: 400,
          paddingLeft:"40%",    
        }}
      >
        {info}
      </Typography>

      <Grid container spacing={3}>
        {CATEGORIES.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CatCard
              name={item.name}
              description={item.description}
              image={item.image}
              path={item.path}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CatList;