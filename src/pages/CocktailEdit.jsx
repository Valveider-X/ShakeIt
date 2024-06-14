import { useState, useEffect } from "react";
import service from "../services/config.services";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import cocktailCategories from "../data/categories-cocktail.json";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CocktailEdit() {
  const navigate = useNavigate();

  const params = useParams();
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
        navigate("/error");
      }
    };
    pillarData();
  }, []);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await service.put(
        `${import.meta.env.VITE_URL_BACKEND}/api/cocktails/${
          params.cocktailId
        }`,
        formData
      );
      navigate(`/cocktails/${params.cocktailId}`);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Edit Cocktail
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          x={{
            mb: 2,
            backgroundColor: "#323232",
            "&:hover": { backgroundColor: "#323232", opacity: 1 },
          }}
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
      </FormControl>
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Steps"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="steps"
        value={formData.steps}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
}

export default CocktailEdit;
