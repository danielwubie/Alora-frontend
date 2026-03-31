import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
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
import { Box, Typography } from "@mui/material";
import styles from "./Sidebar.module.css";
import { getCategoriesWithSubcategories } from "../../services/catalogService";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => setOpen(state);

  const categoryIcons = {
    "Women's Fashion": <WomanIcon sx={{ color: "#8e7e67", width: "24px" }} />,
    "Men's Fashion": <ManIcon sx={{ color: "#8e7e67" }} />,
    "Beauty & Care": <SpaIcon sx={{ color: "#8e7e67" }} />,
    Furniture: <WeekendIcon sx={{ color: "#8e7e67" }} />,
    "Home Essentials": <HomeFilledIcon sx={{ color: "#8e7e67" }} />,
    "Kid's & Baby": <ChildCareIcon sx={{ color: "#8e7e67" }} />,
    "Toys & Games": <SportsEsportsIcon sx={{ color: "#8e7e67" }} />,
    "Arts & crafts": <ColorLensIcon sx={{ color: "#8e7e67" }} />,
  };

const BASE_URL=import.meta.env.VITE_BASE_URL
console.log(BASE_URL)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        

        const res = await axios.get(`${BASE_URL}/category`); // Your backend URL
      
        setCategories(res.data.categories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleSubcategoryClick = (subId, catId) => {
    navigate(`/category/${catId}?sub=${subId}`);
    setOpen(false);
  };

  const handleCategoryClick = (catId) => {
    navigate(`/category/${catId}`);
    setOpen(false);
  };

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
        <MenuIcon
          sx={{
            fontSize: 30,
            "@media (max-width: 412px) and (max-height: 919px)": {
              fontSize: 25,
            },
            "@media (max-width: 393px) and (max-height: 852px)": {
              fontSize: 20,
            },
            "@media (max-width: 1440px) ": {
              fontSize: 25,
            },
          }}
          className={styles.IconButton}
        />
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
                          fontWeight: "500",
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
                    key={sub.id}
                    sx={{ ml: 4 }}
                    onClick={() => handleSubcategoryClick(sub.id, cat.id)}
                    className={styles.SubCategorys}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontFamily: "system-ui",
                            fontWeight: "500",
                            textTransform: "capitalize",
                          }}
                        >
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
