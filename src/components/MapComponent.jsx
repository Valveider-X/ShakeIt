import React, { useEffect, useRef, useState } from "react";
import pin from "/images/pinpoint.png"

import L from "leaflet";
import { Box, Container } from "@mui/material";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const [map, setMap] = useState(null);

  const bars = [
    {
      name: "1862 Dry Bar",
      lat: 40.42546,
      lng: -3.70472,
      description:
        "Specializing in classic cocktails, with a wide variety of drinks inspired by original recipes from before Prohibition.",
      icon: {pin}
    },
    {
      name: "The Dash",
      lat: 40.43493,
      lng: -3.70379,
      description:
        "Cocktail bar in Chamberí with classic and signature cocktails, known for high-quality ingredients.",
    },
    {
      name: "Salmón Gurú",
      lat: 40.41455,
      lng: -3.6983,
      description:
        "Innovative and dynamic, offering a unique experience with creative cocktails and original presentations.",
    },
    {
      name: "Viva Madrid",
      lat: 40.41522,
      lng: -3.69801,
      description:
        "A historic tavern renovated to combine classic cocktails with a traditional Madrid atmosphere.",
    },
    {
      name: "Angelita",
      lat: 40.4196,
      lng: -3.70157,
      description:
        "Features two distinct spaces for wine and cocktails, known for its excellent ingredients and varied offerings.",
    },
    {
      name: "Veinti7 Cocktail Bar",
      lat: 40.41969,
      lng: -3.70022,
      description:
        "Elegant and cozy, known for its well-crafted cocktails and accessible prices.",
    },
    {
      name: "Txueca Restaurante - Cocktail Bar",
      lat: 40.42138,
      lng: -3.69947,
      description:
        "Combines Basque cuisine with cocktails, offering an elegant and comfortable atmosphere.",
    },
    {
      name: "Saporem",
      lat: 40.4255,
      lng: -3.7004,
      description:
        "Charming interior terrace and a wide variety of cocktails at affordable prices.",
    },
    {
      name: "La Bicicleta Café",
      lat: 40.42664,
      lng: -3.70303,
      description:
        "Combines coffee, art, and cocktails in a relaxed and welcoming environment.",
    },
    {
      name: "San Mateo Circus",
      lat: 40.42567,
      lng: -3.69926,
      description:
        "Iconic venue of Madrid nightlife, with refined cocktails and art-deco decor.",
    },
    {
      name: "La Santoría",
      lat: 40.4265,
      lng: -3.7058,
      description: "Offers a range of creative cocktails in a unique setting.",
    },
    {
      name: "Santos y Desamparados",
      lat: 40.4146,
      lng: -3.6972,
      description:
        "Known for its innovative cocktail menu and vibrant atmosphere.",
    },
    {
      name: "Castellana 113",
      lat: 40.4458,
      lng: -3.6914,
      description: "Stylish cocktail bar located on Paseo de la Castellana.",
    },
    {
      name: "Inclán Brutal Bar",
      lat: 40.4149,
      lng: -3.7036,
      description: "Combines theatrical ambiance with a dynamic cocktail menu.",
    },
    {
      name: "Glass by Sips",
      lat: 40.4169,
      lng: -3.6983,
      description: "Sophisticated bar with a modern take on classic cocktails.",
    },
    {
      name: "El Coleccionista",
      lat: 40.4375,
      lng: -3.6882,
      description: "Features an extensive collection of rare and fine spirits.",
    },
    {
      name: "Punch Room",
      lat: 40.4176,
      lng: -3.7073,
      description:
        "Exclusive cocktail bar offering a variety of punch cocktails.",
    },
    {
      name: "Le Speakeasy",
      lat: 40.431,
      lng: -3.689,
      description:
        "Hidden bar with a 1920s theme, offering creative cocktails.",
    },
    {
      name: "Lovo",
      lat: 40.4148,
      lng: -3.6992,
      description:
        "Known for its vibrant nightlife and extensive cocktail menu.",
    },
    {
      name: "Ni Fu Ni Fa",
      lat: 40.4265,
      lng: -3.7033,
      description: "A trendy spot with an eclectic cocktail menu.",
    },
    {
      name: "Persimmon’s",
      lat: 40.4268,
      lng: -3.6924,
      description:
        "Offers a refined selection of cocktails in an upscale environment.",
    },
    {
      name: "Harrison 1933",
      lat: 40.4211,
      lng: -3.6886,
      description: "Elegant cocktail bar with a focus on classic drinks.",
    },
    {
      name: "Mucho Bar",
      lat: 40.4149,
      lng: -3.7001,
      description: "A cozy bar known for its creative cocktails.",
    },
    {
      name: "Parque Bar Botánico",
      lat: 40.4422,
      lng: -3.6937,
      description: "A botanical-themed bar offering a wide range of cocktails.",
    },
    {
      name: "Dry Martini The Bar",
      lat: 40.4245,
      lng: -3.7172,
      description: "Specializes in martinis and other classic cocktails.",
    },
    {
      name: "Hijos de Tomás",
      lat: 40.4186,
      lng: -3.7038,
      description: "A hidden gem with a creative cocktail menu.",
    },
    {
      name: "Smash Tavern Burger Club",
      lat: 40.4812,
      lng: -3.3647,
      description: "Cocktails, burgers, and beers in a rock & roll atmosphere.",
    },
    {
      name: "La Cúpula",
      lat: 40.4815,
      lng: -3.3636,
      description:
        "Offers traditional Castilian food and cocktails in a 17th-century convent.",
    },
    {
      name: "Martilota",
      lat: 40.4802,
      lng: -3.365,
      description:
        "Known for its exotic and vintage decor, offering a wide menu including cocktails.",
    },
    {
      name: "Dublin House",
      lat: 40.4517,
      lng: -3.4707,
      description:
        "Irish-themed bar with a wide variety of cocktails and beers.",
    },
    {
      name: "La Violeta Gastrobar",
      lat: 40.4538,
      lng: -3.4743,
      description: "Modern and cozy gastrobar serving cocktails.",
    },
  ];

  useEffect(() => {
    const cocktailMap = L.map("map", {
      center: [40.42546, -3.70472],
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(cocktailMap);

    setMap(cocktailMap);
  }, []);

  useEffect(() => {
    if (map) {
      bars.forEach((bar) => {
        const pinpoint = new L.Icon({
          iconUrl: pin,
          iconAnchor: [12, 41],
          popupAnchor: [0, -41],
          iconSize: [25, 25],
          className: "marker-icon"
        })
        const marker = L.marker([bar.lat, bar.lng], {icon: pinpoint}).addTo(map);
        marker.bindPopup(`${bar.name}<br>${bar.description}`);
      });
    }
  }, [map]);

  return (
    <Container>
      <br />
      <h3>Here you can view the most notorious cocktails of Madrid</h3>
      <Box
        id="map"
        sx={{
          height: 500,
          width: "100%",
          border: "1px solid black",
          overflow: "hidden",
          position: "relative",
        }}
      />
    </Container>
  );
}

export default MapComponent;
