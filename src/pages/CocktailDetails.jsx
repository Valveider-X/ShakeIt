import React, { useContext, useEffect, useState } from "react";
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
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function CocktailDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const pillarData = async () => {
      try {
        const response = await service.get(`/cocktails/${params.cocktailId}`);
        setCocktailDetails(response.data);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        navigate("/error");
      }
    };
    pillarData();
  }, []);

  if (!cocktailDetails) {
    return (
      <Stack sx={{ color: "orange.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
  }
  const favCocktail = async () => {
    try {
      await service.patch(`/user/${params.cocktailId}/fav`);
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    } catch (error) {
      navigate("/error");
    }
  };

  const deleteCocktail = async () => {
    try {
      await service.delete(`/cocktails/${params.cocktailId}`);
      navigate("/cocktails");
    } catch (error) {
      navigate("/error");
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
              <Typography variant="body1">
                {cocktailDetails.description}
              </Typography>
              <Typography variant="body2">{cocktailDetails.steps}</Typography>
              <Box mt={2}>
                {cocktailDetails.ingredients.map((ingredient, i) => (
                  <Box key={i} mb={1}>
                    <Typography variant="body1" component="span">
                      {`Ingredient: ${ingredient.name}, `}
                    </Typography>
                    <Typography variant="body1" component="span">
                      {`Description: ${ingredient.description},`}{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                    >{`Percentage of alcohol: ${ingredient.alcoholGraduation}`}</Typography>
                  </Box>
                ))}
              </Box>
              <Comment cocktailId={cocktailDetails._id} />
            </CardContent>
          </Card>

          <Box mt={2}>
            {isLoggedIn && loggedUserId === cocktailDetails.owner._id && (
              <>
                <IconButton onClick={deleteCocktail} aria-label="delete">
                  <Delete />
                </IconButton>
                <IconButton
                  onClick={() =>
                    navigate(`/cocktail/${cocktailDetails._id}/edit`)
                  }
                  aria-label="edit"
                >
                  <Edit />
                </IconButton>
              </>
            )}
            {isLoggedIn && (
              <IconButton onClick={favCocktail} aria-label="favorite">
                <Favorite sx={{ color: isFavorite ? "orange" : "inherit" }} />
              </IconButton>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CocktailDetails;
