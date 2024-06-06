import { useState, useEffect } from "react";
import service from "../services/config.services";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import cocktailCategories from "../data/categories-cocktail.json"

function CocktailEdit() {
    const navigate = useNavigate()

    const params = useParams()
  const [categoryValue, setCategoryValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    steps: "",
    ingredients: [],
    imageUrl: "",
  });

  useEffect(() => {
    const pillarData = async () => {
      try {
        const response = await service.get(`/cocktails/${params.cocktailId}`);

        setFormData({
          name: response.data.name,
          category: response.data.category,
          description: response.data.description,
          steps: response.data.steps,
          ingredients: response.data.ingredients,
          imageUrl: response.data.imageUrl,
        });
      } catch (error) {
        console.log(error);
      }
    };
    pillarData();
  }, []);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  /*   const handleEdit = () => {
        setEditing(true);
      }; */
  const handleSave = async () => {
    try {
      await service.put(
        `${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${
          params.cocktailId
        }`,
        formData
      );
      navigate(`/cocktails/${params.cocktailId}`)
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* //todo hacer esto como un select de todas las categories. con el json. En el select pones la preseleccionada*/}
      <Select
        label="Category"
        variant="outlined"
        fullWidth
        value={categoryValue}
        onChange={(e) => setCategoryValue(e.target.value)}
        displayEmpty
        x={{ mb: 2, backgroundColor: '#323232', '&:hover': { backgroundColor: '#323232' , opacity: 1 } }}
        
      >
        <MenuItem value="" disabled >
          Select a category
        </MenuItem>
        {cocktailCategories.map((eachCategory) => (
          <MenuItem key={eachCategory} value={eachCategory} sx={{ backgroundColor: '#323232', opacity: 1 }}>
            {eachCategory}
          </MenuItem>
        ))}
      </Select>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Steps:
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleInputChange}
        />
      </label>

      <br />
      <button type="button" onClick={handleSave}>Save Changes</button>
    </div>
  );
}

//todo los ingredientes se modifican por sparado en otra pagina
//todo imagene se modifica en otra parte, no es el mismo formulario

export default CocktailEdit;
