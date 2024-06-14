import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/config.services";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { AuthContext } from "../context/auth.context";
import cocktailCategories from "../data/categories-cocktail.json";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { AddAPhoto } from "@mui/icons-material";

function MakeCocktail() {
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [ingredientsValue, setIngredientsValue] = useState([]); // chips. Nombre
  const [selectedIngredients, setSelectedIngredients] = useState([]); // data a enviar. Id
  const [stepsValue, setStepsValue] = useState("");
  const [ingredientsOptions, setIngredientsOptions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  //CLOUDINARY
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  //CLOUDINARY UPLOAD
  const handleFileUpload = async (event) => {
    if (!event.target.files[0]) {
      return;
    }

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);

    try {
      const response = await service.post("/upload", uploadData);

      setImageUrl(response.data.imageUrl);
    

      setIsUploading(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleOpenDialog = () => {
    setSelectedIngredients([]);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    try {
      const response = await service.get("/ingredients");
      setIngredientsOptions(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  //event
  const handleIngrChange = (e) => {
    const newIngredient = e.target.value;
    const isSelected = selectedIngredients.includes(newIngredient); //seleccionamos ingrediente

    if (isSelected) {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== newIngredient) //si esta en la lista, se elimina de la lista
      );
    } else {
      setSelectedIngredients([...selectedIngredients, newIngredient]); //spread. si no se mete y concatena
    }
  };
  const handleAcceptIngredients = () => {
    const selectedIngredientNames = selectedIngredients.map(
      (ingredientId) =>
        ingredientsOptions.find((option) => option._id === ingredientId).name
    );
    setIngredientsValue((prevIngredients) => [
      ...prevIngredients,
      ...selectedIngredientNames,
    ]);
    setOpenDialog(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

   
    const newCocktail = {
      name: nameValue,
      category: categoryValue,
      imageUrl: imageUrl,
      description: descriptionValue,
      ingredients: selectedIngredients,
      steps: stepsValue,
    };

    try {
      const response = await service.post(`/cocktails`, newCocktail);
      navigate("/cocktails");
      
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" mb={2}>
        Create a New Cocktail
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="600px"
      >
        <Box mb={2} width="100%">
          <Button
            variant="contained"
            component="label"
            startIcon={<AddAPhoto />}
            fullWidth
          >
            Upload Image
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </Button>
          {isUploading && <CircularProgress sx={{ mt: 2 }} />}
          {imageUrl && (
            <Box mt={2}>
              <img src={imageUrl} alt="Cocktail" width="100%" />
            </Box>
          )}
        </Box>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Select
          label="Category"
          variant="outlined"
          fullWidth
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          displayEmpty
          sx={{
            mb: 5,
            backgroundColor: "#323232",
            "&hover": { backgroundColor: "#323232", opacity: 1 },
          }}
          gutterBottom
        >
          <MenuItem value="" disabled>
            Select a category
          </MenuItem>
          {cocktailCategories.map((eachCategory) => (
            <MenuItem
              key={eachCategory}
              value={eachCategory}
              sx={{ backgroundColor: "#323232", opacity: 1 }}
            >
              {eachCategory}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          onClick={handleOpenDialog}
          sx={{ mb: 2 }}
          fullWidth
        >
          Select Ingredients
        </Button>

        {ingredientsValue.length > 0 && (
          <Box mb={2} width="100%">
            {ingredientsValue.map((ingredient, index) => (
              <Chip key={index} label={ingredient} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
        )}

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{ sx: { backgroundColor: "rgba(50, 50, 50, 1)" } }}
        >
          <DialogTitle>Select Ingredients</DialogTitle>
          <DialogContent>
            <Box sx={{ maxHeight: 400, overflow: "auto" }}>
              {ingredientsOptions.map((ingredient) => (
                <Box
                  key={ingredient._id}
                  display="flex"
                  alignItems="center"
                  mb={1}
                >
                  <Typography>{ingredient.name}</Typography>
                  <input
                    type="checkbox"
                    value={ingredient._id}
                    onChange={handleIngrChange}
                    style={{ marginLeft: "auto" }}
                  />
                </Box>
              ))}
            </Box>
            <Button
              onClick={handleAcceptIngredients}
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Accept Ingredients
            </Button>
          </DialogContent>
        </Dialog>

        <TextField
          label="Steps"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={stepsValue}
          onChange={(e) => setStepsValue(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Make Cocktail
        </Button>
      </Box>
    </Box>
  );
}

export default MakeCocktail;
