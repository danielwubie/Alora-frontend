import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../ProductCard/ProductCard.module.css"

function MyCard({  name, Price, description, image }) {
  return (
    <Card sx={{ width: 300, borderRadius: 4, boxShadow: 0, border:"1px solid #e1e1e1ff" }} className={styles.cardbox}>
      <div className={styles.imagewrapper}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt={name}
        className={styles.imagebox}
      />
      </div>
      <CardContent>
        <Typography variant="h6">{name}</Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          {description}
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        ${Price.toLocaleString()}
        </Typography>

      

        <Button variant="outlined" sx={{ mt: 2,color: "black", height:"45px",width:"115px"} } className={styles.cardbutton}>
          Quick Add
        </Button>
      </CardContent>
    </Card>
  );
}

MyCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  subcategory_id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default MyCard;
