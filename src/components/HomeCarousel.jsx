import React from "react";
import Carousel from "react-material-ui-carousel";
import makeCocktail from "/images/make-your-cocktail.jpg";
import cocktailList from "/images/cocktail-list.jpg";
import ice from "/images/ice.jpg";
import tools from "/images/tools.jpg";
import techniques from "/images/stir.jpg";
import { Link } from "react-router-dom";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function HomeCarousel() {
  return (
   /*  <ThemeProvider theme={theme}>
      <Carousel>
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
        </Card>
      </Carousel>
    </ThemeProvider> */
    <p>HOLA</p>
  );
}

export default HomeCarousel;
