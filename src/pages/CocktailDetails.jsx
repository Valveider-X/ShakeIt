import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import service from "../services/config.services";


function CocktailDetails() {
  const params = useParams();
  const navigate = useNavigate()

  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${params.cocktailId}`)
      .then((response) => {
        setCocktailDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteCocktail = async () =>{
    try {
      const userAuthenticated = await getUserAuthenticated() //usuario identificado
      const cocktailOwner = await getCocktailOwner(params.cocktailId)

      if(userAuthenticated.id === cocktailOwner.id){
        await await service.delete(`${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${params.cocktailId}`)
        navigate("/cocktails")

      }else {
        alert("You're not allowed to delete this cocktail")
      }
      
      
    } catch (error) {
      
      
    }
    const getUserAuthenticated = async () => {
      //logica user auth.
    }
    const getCocktailOwner = async (cocktailId) => {
      //logica obtener dueño
    }
  
  }

  if (cocktailDetails === null) {
    return <h1>ESPERA</h1>;
  }
  return (
    <div>
      <button onClick={deleteCocktail}>Delete Cocktail</button>
      <h3>{cocktailDetails.name}</h3>
      <img src={cocktailDetails.imageUrl} />
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
      
      {/* <Comment /> */}
    </div>
  );
}

export default CocktailDetails;
