import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../ProductCard/ProductCard.module.css";
import Snackbar from "@mui/material/Snackbar";
import { addToCart } from "../../services/cartService";
import { getFallbackProductImageUrl } from "../../services/catalogService";
import { useNavigate } from "react-router-dom";

function MyCard({ id, name, Price, description, image }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(id, 1);
      setOpen(true);
      setMessage("Added successfully");
      setColor("#5aebaaff");
    } catch (error) {
      console.error("Failed to add to cart", error);
      setOpen(true);

      if (error.message === "AUTH_REQUIRED") {
        setMessage("You have to login to add to cart");
        setColor("#eb5a5aff");
        setTimeout(() => navigate("/login"), 600);
        return;
      }

      setMessage(error.message || "Failed to add item to cart");
      setColor("#eb5a5aff");
    }
  };

  return (
    <Card
      sx={{ borderRadius: 4, boxShadow: 0, border: "1px solid #e1e1e1ff" }}
      className={styles.cardbox}
    >
      <div className={styles.imagewrapper}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={name}
          className={styles.imagebox}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = getFallbackProductImageUrl(name);
          }}
        />
      </div>

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
          }}
          title={name}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            maxWidth: "200px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={description}
        >
          {description}
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          ${Price.toLocaleString()}
        </Typography>

        <Button
          variant="outlined"
          disableRipple
          sx={{
            mt: 2,
            color: "black",
            height: "45px",
            width: "115px",
            "&:focus": { outline: "none", boxShadow: "none" },
            "&:focus-visible": { outline: "none", boxShadow: "none" },
          }}
          className={styles.cardbutton}
          onClick={handleAddToCart}
        >
          Quick Add
        </Button>
      </CardContent>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: `${color}`,
            color: "#fff",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
            padding: "10px 16px",
          },
        }}
      />
    </Card>
  );
}

MyCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  Price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MyCard;
