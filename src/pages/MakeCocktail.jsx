import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

function MakeCocktail() {
  const {authToken} = useContext(AuthContext);

  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [ingredientsValue, setIngredientsValue] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [stepsValue, setStepsValue] = useState("");
  const [ingredientsOptions, setIngredientsOptions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();




  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    getIngredients();
  }, [authToken]);

  const getIngredients = async () => {
    try {
      const response = await service.get("/ingredients");
      // console.log(response.data);  //!CONSOLE
      setIngredientsOptions(response.data);
    } catch (error) {
      console.log(error);
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
  const handleAcceptIngredients = () => { //boton para aceptar los ingredientes
    setIngredientsValue((prevIngredients)=> [...prevIngredients, ...selectedIngredients]); //valor actual del estado y funcion para actualizar
    setOpenDialog(false); //callback con spread para concatenar
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCocktail = {
      name: nameValue,
      category: categoryValue,
      //img
      description: descriptionValue,
      ingredients: ingredientsValue,
      steps: stepsValue,

      //owner, no se como ponerlo
    };

    try { //llamar cons ervice pero no funca
      const response = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/cocktails`,
        newCocktail,{
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          
        }
        
      );
      navigate("/cocktails")
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            type="text"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="Classic Cocktails">Classic Cocktails</option>
            <option value="Classic Highballs">Highballs</option>
            <option value="Seasonal Cocktails">Seasonal Cocktails</option>
            <option value="Dessert Cocktails">Dessert Cocktails</option>
            <option value="Mocktails">Mocktails</option>
            <option value="Fizz Cocktails">Fizz Cocktails</option>
            <option value="Tiki Cocktails">Tiki Cocktails</option>
            <option value="Bitter Cocktails">Bitter Cocktails</option>
            <option value="Punches">Punches</option>
            <option value="Aged Cocktails">Aged Cocktails</option>
            <option value="Coffee Cocktails">Coffee Cocktails</option>
            <option value="Sour Cocktails">Sour Cocktails</option>
            <option value="Infused Cocktails">Infused Cocktails</option>
            <option value="Modern Cocktails">Modern Cocktails</option>
            <option value="Egg White Cocktails">Egg White Cocktails</option>
            <option value="Crushed Ice Cocktails">Crushed Ice Cocktails</option>
            <option value="Sweet and Sour Cocktails">
              Sweet and Sour Cocktails
            </option>
            <option value="Fresh Herb Cocktails">Fresh herb Cocktails</option>
            <option value="Spiced Cocktails">Spiced Cocktails</option>
            <option value="Smoked Cocktails">Smoked Cocktails</option>
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </label>

        <label>
          Ingredients:
          <button onClick={handleOpenDialog}>Select Ingredients</button>
          {ingredientsValue.length > 0 && (//SI la longitud tiene almenos 1 elemento, renderiza los chips(no sale)
            <Chip label={ingredientsValue.map((ing) => ing.name).join(", ")} /> //concatena los nombres de los elementos iterados del map
          )}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <button onClick={handleAcceptIngredients}>
              Accept Ingredients
            </button>
            <DialogTitle>Select Ingredients</DialogTitle>
            <DialogContent>
              <Box sx={{ maxHeight: 400, overflow: "auto" }}>
                {ingredientsOptions.map((ingredient) => (
                  <div key={ingredient.id}>
                    <Typography>{ingredient.name}</Typography>
                    <input
                      type="checkbox"
                      value={ingredient.id}
                      onChange={handleIngrChange}
                    />
                  </div>
                ))}
              </Box>
            </DialogContent>
          </Dialog>
          {/* <select
                name= "ingredients"
                multiple
                value={ingredientsValue}
                onChange={(e)=> handleIngrChange(e.target.value)}
                />
                {ingredientsOptions.map((ingredient)=>(
                    <option key={ingredient.id} value={ingredient.id}>
                        {ingredient.name}
                    </option>
                ))} */}
        </label>

        <label>
          Steps:
          <textarea
            name="steps"
            value={stepsValue}
            onChange={(e) => setStepsValue(e.target.value)}
          />
        </label>

        <button type="submit">Make Cocktail</button>
      </form>
    </div>
  );
}

export default MakeCocktail;
