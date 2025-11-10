import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../catagory/category.module.css";
import { useNavigate } from 'react-router-dom';
function CatCard({ name, description, image,path }) {
  const [hovered, setHovered] = useState(false);
  const navigate=useNavigate()
  const handleClick = () => {
    if (path) {
      navigate(path);
      
    }

  };
  return (
    <Card
      sx={{ borderRadius: 4, boxShadow: 0, border: "1px solid #e1e1e1" }}
      className={styles.cardbox}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imagewrapper}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={name}
          className={styles.imagebox}
          sx={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
            filter: hovered ? "blur(3px)" : "none", 
          }}
        />
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            top: "50%",
            left: "49%",
            transform: "translate(-50%, -50%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            zIndex: 10,
            color: "black",
            height: "45px",
            width: "115px",
            border: "1px solid rgb(161, 144, 125)",
            backgroundColor: "#8b4513",  
          }}
           className={styles.cardbutton}
           onClick={handleClick}
        >
          Quick shop
        </Button>
      </div>

      <CardContent className={styles.content}>
        <Typography variant="h6" sx={{paddingTop:5}}>{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

CatCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  path: PropTypes.string,
};

export default CatCard;
