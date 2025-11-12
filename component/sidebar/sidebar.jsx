import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import SpaIcon from "@mui/icons-material/Spa";
import WeekendIcon from "@mui/icons-material/Weekend";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./Sidebar.module.css";
import { Typography } from "@mui/material";

export default function Sidebar() {
  console.log("tesssssst");

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => setOpen(state);

  // Define icons for specific categories
  const categoryIcons = {
    "Women's Fashion": <WomanIcon sx={{ color: "#8e7e67", width: "24px" }} />,
    "Men's Fashion": <ManIcon sx={{ color: "#8e7e67" }} />,
    "Beauty & Care": <SpaIcon sx={{ color: "#8e7e67" }} />,
    "Furniture": <WeekendIcon sx={{ color: "#8e7e67" }} />,
    "Home Essentials": <HomeFilledIcon sx={{ color: "#8e7e67" }} />,
    "Kid's & Baby": <ChildCareIcon sx={{ color: "#8e7e67" }} />,
    "Toys & Games": <SportsEsportsIcon sx={{ color: "#8e7e67" }} />,
    "Arts & crafts": <ColorLensIcon sx={{ color: "#8e7e67" }} />,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("test❤❤❤❤❤");

        const res = await axios.get("http://127.0.0.1:5000/category"); // Your backend URL
        console.log("res", res);
        setCategories(res.data.categories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubcategoryClick = (subId,catId) => {
  const currentPath = window.location.pathname;

  // Only update query param if we're already on a category page
  if (currentPath.startsWith("/category/")) {
    navigate(`/category/${catId}?sub=${subId}`);
  } else {
    // If not on a category page, go to one (optional fallback)
    navigate(`/category/${catId}?sub=${subId}`); // replace 1 with your default category ID if needed
  }

  setOpen(false);
};

  const handleCategoryClick=(catId)=>{
    navigate(`/category/${catId}`);
    setOpen(false);
  }

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        disableRipple
        sx={{
          "&:focus": { outline: "none", boxShadow: "none" },
          "&:focus-visible": { outline: "none", boxShadow: "none" },
        }}
      >
        <MenuIcon sx={{ fontSize: 40 }} className={styles.IconButton} />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div className={styles.continer}>
          <p className={styles.text}>Shop by Category</p>

          <List sx={{ width: "304", backgroundColor: "white", height: "100%" }}>
            {categories.map((cat) => (
              <div key={cat.id}>
                <ListItem
                  className={styles.Categorys}
                  onClick={() => handleCategoryClick(cat.id)}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 0,
                    p: 0,
                  }}
                  
                >
                  <Box sx={{ p: "12px" }}>
                    {categoryIcons[cat.name] || (
                      <HomeFilledIcon sx={{ color: "black" }} />
                    )}
                  </Box>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#3D2914",
                          fontFamily: "system-ui",
                          fontWeight:"500"
                        }}
                      >
                        {cat.name}
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider />

                {cat.subcategories?.map((sub) => (
                  <ListItem
                    button
                    key={sub.id}
                    sx={{ ml: 4 }}
                    onClick={() => handleSubcategoryClick(sub.id,cat.id)}
                    className={styles.SubCategorys}
                  >
                    <ListItemText
                      primary={
                        <Typography sx={{ fontFamily: "system-ui" , fontWeight:"500",textTransform: "capitalize" }}>
                          {sub.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}