import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";

function CocktailDetails() {
  const params = useParams();

  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL_BACKEND}/cocktails/${params.cocktailId}`)
      .then((response) => {
        setCocktailDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (cocktailDetails === null) {
    return <h1>ESPERA</h1>;
  }
  return (
    <div>
      
      <h3>{cocktailDetails.name}</h3>
      <img src={cocktailDetails.img} />
      <h6>{cocktailDetails.category}</h6>
      <h6>{cocktailDetails.description}</h6>
      <h6>{cocktailDetails.steps}</h6>
      {cocktailDetails.ingredients.map((eachIngredient, index) => {
        return (
          <div key={index}>
            <h6>{`Ingredient: ${eachIngredient.name}`}</h6>
            <h6>{`Description: ${eachIngredient.description}`}</h6>
            <h6>{`Has alcohol: ${eachIngredient.hasAlcohol? "yes" : "no"}`}</h6>
            <h6>{`Percentage of alcohol: ${eachIngredient.alcoholGraduation}`}</h6>
            
          </div>
        );
      })}
      
      <Comment />
    </div>
  );
}

export default CocktailDetails;
