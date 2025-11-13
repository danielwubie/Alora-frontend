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
    <Box sx={{ paddingY: 3, width: "100%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "#3d2914",
          fontSize: 20,
          fontFamily: "system-ui",
          // paddingLeft: "40%",  
          textAlign:"center"
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
          textAlign:"center"
          // paddingLeft: "40%",
        }}
      >
        {info}
      </Typography>

      {/* <Grid container spacing={3} justifyContent="center" alignItems="center">
        {CATEGORIES.map((item) => (
          <Grid
            item
            xs={12} // full width on extra-small screens
            sm={6} // half width on small screens
            md={4} // one-third width on medium screens
            lg={3} // one-quarter width on large screens
            xl={6}
            key={item.id}
          >
            <CatCard
              name={item.name}
              description={item.description}
              image={item.image}
              path={item.path}
            />
          </Grid>
        ))}
      </Grid> */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center",gap:3,flexWrap:"wrap",}}>
        {CATEGORIES.map((item) => (
          <Box
            item
            key={item.id}
            sx={{
              '@media (min-width: 1100px) ': {
     width:"25%"
    },
             minWidth: "220px;"
             
            }}
          >
            <CatCard
              name={item.name}
              description={item.description}
              image={item.image}
              path={item.path}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CatList;
