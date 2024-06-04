import React from "react";
import Carousel from "react-material-ui-carousel";
import makeCocktail from "/images/make-your-cocktail.jpg";
import cocktailList from "/images/cocktail-list.jpg";
import ice from "/images/ice.jpg";
import tools from "/images/tools.jpg";
import techniques from "/images/stir.jpg";
import { Link } from "react-router-dom";
import Typography  from "@mui/material/Typography";
import Paper  from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {createTheme} from "@mui/system";
import ThemeProvider from "@mui/system/ThemeProvider";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiPaper:{
      defaultProps:{
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 4
        }
      }
    }
  }
});

function HomeCarousel() {
  return (
     <ThemeProvider theme={theme}>
     
{/*
        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <Link to="/make-cocktail">
            <CardMedia
              component="img"
              height="300"
              image={makeCocktail}
              alt="Make your cocktail"
            />
            <CardContent>
              <Typography variant="h5" component="h3">
                Make your Cocktail
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Create your own cocktail with our ingredients
              </Typography>
            </CardContent>
          </Link>
        </Card>

         <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            height="300"
            image={cocktailList}
            alt="Cocktail List"
          />
          <CardContent>
            <Typography variant="h5" component="h3">
              Cocktail List
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Explore our list of cocktails
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia component="img" height="300" image={ice} alt="Hielo" />
          <CardContent>
            <Typography variant="h5" component="h3">
              Ice
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Learn about the importance of ice in cocktails
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia component="img" height="300" image={tools} alt="Tools" />
          <CardContent>
            <Typography variant="h5" component="h3">
              Tools
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Discover the esential tools for mixing cocktails
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            height="300"
            image={techniques}
            alt="Techniques"
          />
          <CardContent>
            <Typography variant="h5" component="h3">
              Techniques
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Master the art of mixing cocktails with our techniques
            </Typography>
          </CardContent>
        </Card>*/}
    </ThemeProvider> 
  
  );
}

export default HomeCarousel;
