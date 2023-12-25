import React from "react";
import { Card, Typography, CardMedia, Box } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductList({ product }) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <Card
      sx={{
        cursor: "pointer",
        position: "relative",
        "&:hover": {
          "& .productName": { color: "#2874f0" },
        },
      }}
    >
      <div style={{ position: "absolute", top: "5px", right: "5px" }}>
        <StyledRating
          name="customized-color"
          max={1}
          icon={<FavoriteIcon fontSize="inherit" style={{ color: "red" }} />}
          emptyIcon={
            <FavoriteBorderIcon fontSize="inherit" style={{ color: "#FFF" }} />
          }
        />
      </div>

      <CardMedia
        component="img"
        alt={product.productName}
        height="300"
        image={product.image}
      />
      <Box sx={{ padding: "10px" }}>
        <Typography sx={{ fontWeight: "700" }} className="productName">
          {product.productName}
        </Typography>
        <div style={{ display: "flex" }}>
          <CurrencyRupeeIcon />
          <Typography sx={{ fontWeight: "700" }}>{product.price}</Typography>
        </div>
      </Box>
    </Card>
  );
}

export default ProductList;
