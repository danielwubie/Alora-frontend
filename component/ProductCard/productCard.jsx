import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MyCard({ id, name, Price, description, subcategory_id, image }) {
  return (
    <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
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

      

        <Button variant="outlined" sx={{ mt: 2 }}>
          Add to Cart
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
