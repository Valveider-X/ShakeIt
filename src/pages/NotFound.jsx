import React from "react";
import notFound from "/images/404.jpg";
import logo from "/images/logo.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <br />
      <h1>Page not found</h1>

      <img src={notFound} width={"600px"} />

      <h3>If you are lost click in the Cocktail Shaker</h3>
      <Typography
        className="shake"
        variant="h4"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <Link to="/" style={{ color: "inherit" }}>
          <img className="shake" src={logo} width={"200px"} />
        </Link>
      </Typography>
    </div>
  );
}

export default NotFound;
