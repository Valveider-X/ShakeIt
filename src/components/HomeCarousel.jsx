import React from "react";
import Carousel from "react-material-ui-carousel";
import makeCocktail from "/images/make-your-cocktail.jpg";
import cocktailList from "/images/cocktail-list.jpg";
import ice from "/images/ice.jpg";
import tools from "/images/tools.jpg";
import techniques from "/images/stir.jpg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 4,
        },
      },
    },
  },
});

const items = [
  {
    title: "Make your Cocktail",
    description: "Create your own cocktail with our ingredients",
    image: makeCocktail,
    link: "/create-cocktail",
  },
  {
    title: "Cocktail List",
    description: "Explore our list of cocktails",
    image: cocktailList,
    link: "/cocktails",
  },
  {
    title: "Ice",
    description: "Learn about the importance of ice in cocktails",
    image: ice,
    link: "/articles/ice",
  },
  {
    title: "Tools",
    description: "Discover the essential tools for mixing cocktails",
    image: tools,
    link: "/articles/utensils",
  },
  {
    title: "Techniques",
    description: "Master the art of mixing cocktails with our techniques",
    image: techniques,
    link: "/articles/techniques",
  },
];
//de prueba

function HomeCarousel() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '80%', maxWidth: 800}}>
        <Carousel
        animation="fade"
        duration={800}
        indicators={true}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: 'orange',
            color: 'white',
          },
        }}>
          {items.map((item, index) => (
            <Card key={index} sx={{ margin: 2 }}>
              <Link to={item.link || "#"} style={{ textDecoration: 'none' }}>
              <CardMedia
                  component="img"
                  height="600"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent >
                  <Typography variant="h5" component="h3" color="orange">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="orange">
                    {item.description}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
        </Carousel>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default HomeCarousel;