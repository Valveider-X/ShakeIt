import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import service from "../services/config.services";
import { AuthContext } from "../context/auth.context";

//MUI
import { Box } from "@mui/system";
import { Button, CardContent, CardMedia, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

function CocktailDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    const pillarData = async () => {
      try {
        const response = await service.get(`/cocktails/${params.cocktailId}`);
        setCocktailDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    pillarData();
  }, []);

  if (!cocktailDetails) {
    return <h1>ESPERA</h1>;
  }
  const favCocktail = async () =>{
    try {
      await service.patch(`/user/${params.cocktailId}/fav`)
      navigate("/cocktails")

      
    } catch (error) {
      
    }
  }

  const deleteCocktail = async () => {
    try {
      /* await authenticateUser(); */
      await service.delete(
        `/cocktails/${params.cocktailId}`
      );
      navigate("/cocktails");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {cocktailDetails && (
        <Box maxWidth="600px" width="100%" mt={2}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={cocktailDetails.imageUrl}
              alt={cocktailDetails.name}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cocktailDetails.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {cocktailDetails.category}
              </Typography>
              <Typography variant="body1">{cocktailDetails.description}</Typography>
              <Typography variant="body2">{cocktailDetails.steps}</Typography>
              <Box mt={2}>
                {cocktailDetails.ingredients.map((ingredient, i)=>(
                  <Box key={i} mb={1}>
                    <Typography variant="body1" component="span">
                      {`Ingredient: ${ingredient.name}, `}
                    </Typography>
                    <Typography variant="body1" component="span">{`Description: ${ingredient.description},`} </Typography>
                    <Typography variant="body1" component="span">{`Percentage of alcohol: ${ingredient.alcoholGraduation}` }</Typography>
                    </Box>
                ))}
              </Box>
              <Comment cocktailId={cocktailDetails._id}/>
            </CardContent>
          </Card>
          {isLoggedIn &&
        loggedUserId === cocktailDetails.owner._id && (
          <Box mt={2}>
            <IconButton onClick={deleteCocktail} aria-label="delete">
              <Delete />
            </IconButton>
            <IconButton onClick={()=> navigate(`/cocktail/${cocktailDetails._id}/edit`)} aria-label="edit">
              <Edit />
            </IconButton>
            <IconButton onClick={favCocktail} aria-label="favorite">
              <Favorite />
            </IconButton>
            </Box>
        )}
        </Box>
      )}
      {!cocktailDetails && <Typography variant="h6">Loading...</Typography>}
      </Box>
        
         /*  <>
            <button onClick={deleteCocktail}>Delete</button>
            <button
              onClick={() => navigate(`/cocktail/${cocktailDetails._id}/edit`)}
            >
              Editar
            </button>
            <button onClick={favCocktail}>Favorites</button>

            <div>
              <h3>{cocktailDetails.name}</h3>
              <img src={cocktailDetails.imageUrl} width={200} />
              <h6>{cocktailDetails.category}</h6>
              <h6>{cocktailDetails.description}</h6>
              <h6>{cocktailDetails.steps}</h6>
              {cocktailDetails.ingredients.map((eachIngredient, index) => {
                return (
                  <div key={index}>
                    <h6>{`Ingredient: ${eachIngredient.name}`}</h6>
                    <h6>{`Description: ${eachIngredient.description}`}</h6>
                    <h6>{`Has alcohol: ${
                      eachIngredient.hasAlcohol ? "yes" : "no"
                    }`}</h6>
                    <h6>{`Percentage of alcohol: ${eachIngredient.alcoholGraduation}`}</h6>
                  </div>
                );
              })}
              <Comment cocktailId={cocktailDetails._id} />
            </div>
          </>
        )}
    </div> */
  );
}

export default CocktailDetails;
