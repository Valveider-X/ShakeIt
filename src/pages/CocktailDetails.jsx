import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import service from "../services/config.services";
import { AuthContext } from "../context/auth.context";

function CocktailDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    steps: "",
    ingredients: [],
    imageUrl: "",
  });

  useEffect(() => {
    const pillarData = async()=>{
    try {
      const response = await service.get(`/cocktails/${params.cocktailId}`)
      setCocktailDetails(response.data);
        setFormData({
          name: response.data.name,
          category: response.data.category,
          description: response.description,
          steps: response.data.steps,
          ingredients: response.data.ingredients,
          imageUrl: response.data.imageUrl,
        })
      
    } catch (error) {
      console.log(error);
      
    }
  }
    pillarData()
  }, []);

  if (!cocktailDetails){
    return <h1>ESPERA</h1>
  }
  
  const deleteCocktail = async () => {
    try {
      await authenticateUser();
      await service.delete(
        `${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${params.cocktailId}`
      );
      navigate("/cocktails");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = async (event) => {
    const {name, value} = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value } ));
  };
/*   const handleEdit = () => {
    setEditing(true);
  }; */
  const handleSave = async () => {
    try {
      await authenticateUser();
      await service.put(
        `${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${
          params.cocktailId}`, formData
      );
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

 


return (
  <div>
    {/* Porque funciona con ===????? preguntar a Jorge*/}
    {cocktailDetails && isLoggedIn && loggedUserId === cocktailDetails.owner._id && (
      <>
        <button onClick={deleteCocktail}>Delete</button>
        <button onClick={() => setEditing(true)}>Editar</button>
        {editing ? (
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Steps:
              <textarea
                name="steps"
                value={formData.steps}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image:
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleSave}>Save Changes</button>
          </form>
        ) : (
          <div>
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
                  <h6>{`Has alcohol: ${
                    eachIngredient.hasAlcohol ? "yes" : "no"
                  }`}</h6>
                  <h6>{`Percentage of alcohol: ${eachIngredient.alcoholGraduation}`}</h6>
                </div>
              );
            })}
          <Comment cocktailId={cocktailDetails._id}/>
          </div>
        )}
      </>
    )}
  </div>
);
}

export default CocktailDetails;
