import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../services/config.services";
import { useNavigate } from "react-router-dom";
//MUI
import Grid from "@mui/system/Unstable_Grid/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function CocktailList() {
  const [cocktailList, setCocktailList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await service.get(
          `${import.meta.env.VITE_URL_BACKEND}/api/cocktails`
        );
        setCocktailList(response.data);
      } catch (error) {
      navigate("/error")
      }
    };
    getData();
  }, []);

  if (cocktailList === null) {
    return <Stack sx={{ color: 'orange.500' }} spacing={2} direction="row">
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="inherit" />
  </Stack>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        p: 2,
      }}
    >
      {cocktailList.map((cocktail, i) => (
        <Card
          key={i}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            border: " 1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 4,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
            width: 345,
          }}
        >
          <Link
            to={`/cocktails/${cocktail._id}`}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={cocktail.imageUrl}
              alt={cocktail.name}
              sx={{
                filter: "brightness(0.8) contrast(1.2)",
                transition: "filter 0.3s ease-in-out",
                "&:hover": {
                  filter: "brightness(1) contrast(1.2)",
                },
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div" color="primary">
                {cocktail.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cocktail.description}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </Box>
  );
}

export default CocktailList;
