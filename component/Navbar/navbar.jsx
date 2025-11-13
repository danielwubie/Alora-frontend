import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Sidebar from "../sidebar/sidebar";
import styles from "../Navbar/Navbar.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "900px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  const token = localStorage.getItem("token");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    console.log('💨💨💨💨💨💨');
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleClickLogo = () => {
    navigate("/");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="#8b4513" className={styles.badge}>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Carts</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const handleCartClick = () => {
    navigate("/cart"); // or whatever your cart route is
  };
  const handleProfilleClick = () => {
   
    navigate("/profile");
  
  };

  return (
    <Box sx={{ backgroundColor: "red" }}>
      <AppBar
        sx={{
          backgroundColor: "#ffecd480",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Sidebar />
            <Box
              variant="h6"
              component="div"
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={handleClickLogo}
            >
              <img
                src="../../src/assets/alora_Brand_Logo.png"
                className={styles.image}
              />
            </Box>
          </Box>
          <form onSubmit={handleSearchSubmit} className={styles.searchbox}>
            <Search className={styles.searchbox2}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#624f39" }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ width: "100%" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Search>
          </form>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },
              }}
              
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleCartClick}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon sx={{ 

                  '@media (max-width: 599px) ': {
                    height: "30px",
                      width:"20px"
                  
                  },
                  
                  color: "#624f39" ,
                borderRadius:15,
                    "&:hover":{
                      backgroundColor: "#d4c4a8",
                      // backgroundColor:"#d4c4a8",
                     
                    },
                    fontSize: 20,
                     height: "40px",
                      width:"30px"
                      
                }} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfilleClick}
              color="inherit"
              disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },
              }}
            >
             
              {token ? (
                <PersonOutlineIcon
                  
                  sx={{
                   '@media (max-width: 599px) ': {
                    height: "30px",
                      width:"20px"
                  
                  },
                    fontSize:30,
                    margin:0,
                    padding:0,
                    color: "#624f39",
                    "&:focus": { outline: "none", boxShadow: "none" },
                    "&:focus-visible": { outline: "none", boxShadow: "none" },
                    borderRadius:15,
                    "&:hover":{
                      backgroundColor:"#d4c4a8",
                      
                    },
                    height: "40px",
                      width:"30px"
                  }}
                />
              ) : (
                <Button
                  className={styles.logbtn}
                  sx={{
                    color: "white",
                    backgroundColor: "#C15A18",
                    "&:focus": { outline: "none", boxShadow: "none" },
                    "&:focus-visible": { outline: "none", boxShadow: "none" },
                    "&:hover": {
                      borderRadius: "none",
                      backgroundColor: "none",
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
