import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
function NavBar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}
      >
        <Box>
          <MenuIcon
            sx={{
              cursor: "pointer",
              fontSize: "35px",
              marginLeft: "50px",
              "@media screen and (max-width: 600px)": {
                marginLeft: "10px",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "@media screen and (max-width: 600px)": {
              marginRight: "10px",
            },
          }}
        >
          <ShoppingBasketIcon sx={{ fontSize: "35px" }} />
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", marginLeft: "5%", letterSpacing: "8px" }}
          >
            SNITCH
          </Typography>
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            marginRight: "50px",
            width: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "@media screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: "35px" }} />
          <SearchIcon sx={{ fontSize: "35px" }} />
          <FavoriteBorderIcon sx={{ fontSize: "35px" }} />
          <WorkOutlineIcon sx={{ fontSize: "35px" }} />
          <CameraAltOutlinedIcon sx={{ fontSize: "35px" }} />
        </Box>
      </Box>
      <hr />
    </div>
  );
}

export default NavBar;
