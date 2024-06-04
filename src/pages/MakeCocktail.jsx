import axios from "axios";
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
const params = useParams

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
  /* const [matchingIngredient, setMatchingIngredient]=useState([]) */

  //CLOUDINARY
  const [imageUrl, setImageUrl] = useState(null); 
  const [isUploading, setIsUploading] = useState(false); 

  //CLOUDINARY UPLOAD
  const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
   
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }
  
    setIsUploading(true); // to start the loading animation
  
    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")
    
  
  
    try {
      const response = await service.post("/upload", uploadData)
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
  
      setImageUrl(response.data.imageUrl);
      console.log(imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });
  
      setIsUploading(false);
      
   /*  const editCocktail = {
      imageUrl: response.data.imageUrl
    }  
    await service.patch(`/cocktail/${params.id}`, editCocktail) */
    } catch (error) {
      navigate("/error");
    }
  };

  const handleOpenDialog = () => {
    setSelectedIngredients([])
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
  const handleAcceptIngredients = () => {
    const selectedIngredientNames = selectedIngredients.map(
      (ingredientId) => ingredientsOptions.find((option)=> option._id === ingredientId).name
    )
    setIngredientsValue((prevIngredients)=> [...prevIngredients, ...selectedIngredientNames])
    setOpenDialog(false)


 
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(imageUrl);
    const newCocktail = {
      name: nameValue,
      category: categoryValue,
      imageUrl: imageUrl,
      description: descriptionValue,
      ingredients: ingredientsValue.map((ingredient) => ingredient._id), 
      steps: stepsValue,

  
    };

    try { 
      const response = await service.post(
        `/cocktails`,
        newCocktail);
      navigate("/cocktails")
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <div>
  <label>Image: </label>
  <input
    type="file"
    name="image"
    onChange={handleFileUpload}
    disabled={isUploading}
  />
  {/* below disabled prevents the user from attempting another upload while one is already happening */}
  {/* to render a loading message or spinner while uploading the picture */}
  </div>
{isUploading ? <h3>... uploading image</h3> : null}

{/* below line will render a preview of the image from cloudinary */}
{imageUrl ? (<div><img src={imageUrl} alt="img" width={200} /></div>) : null}



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

        <div>
        



        </div>

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
          <button type="button" onClick={handleOpenDialog}>Select Ingredients</button>
          {ingredientsValue.length > 0 && (//SI la longitud tiene almenos 1 elemento, renderiza los chips(no sale)
            <Chip label={ingredientsValue.join(', ')} /> //concatena los nombres de los elementos iterados del map //meterlo en useState
          )}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <button onClick={handleAcceptIngredients}>
              Accept Ingredients
            </button>
            <DialogTitle>Select Ingredients</DialogTitle>
            <DialogContent>
              <Box sx={{ maxHeight: 400, overflow: "auto" }}>
                {ingredientsOptions && ingredientsOptions.map((ingredient) => (
                  <div key={ingredient._id}>
                    <Typography>{ingredient.name}</Typography>
                    <input
                      type="checkbox"
                      value={ingredient._id}
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
