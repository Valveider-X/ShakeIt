import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function IngredientsList() {
  const navigate = useNavigate()
  const [ingrList, setIngrList] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL_BACKEND}/ingredients`)
      .then((response) => {
        setIngrList(response.data);
      })
      .catch((error) => {
        navigate("/error")
      
      });
  }, []);

  if (ingrList === null) {
    return <Stack sx={{ color: 'orange.500' }} spacing={2} direction="row">
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="inherit" />
  </Stack>
    
  }

  return (
    <div>
      {ingrList.map((ingredient, i) => {
        return (
          <div key={i}>
            <p>{ingredient.name}</p>
            <p>{ingredient.hasAlcohol}</p>
            <p>{ingredient.alcoholGraduation}</p>
            <p>{ingredient.description}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default IngredientsList;
