import React, { useEffect, useRef, useState } from 'react'
import {Map, TileLayer, Marker} from "leaflet"
import L from 'leaflet';
import { Box, Container } from '@mui/material';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  const [map, setMap] = useState(null);

  const bars = [
    {
      name: "1862 Dry Bar",
      lat: 40.425460,
      lng: -3.704720,
      description: "Especializados en coctelería clásica, con una gran variedad de cócteles inspirados en recetas originales de antes de la Ley Seca.",
    },
    {
      name: "The Dash",
      lat: 40.434930,
      lng: -3.703790,
      description: "Coctelería en Chamberí con cócteles clásicos y de autor, destacando por sus ingredientes de alta calidad."
    },
  ];

  useEffect(() => {
    const cocktailMap = L.map('map', {
      center: [40.425460, -3.704720],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c']
    }).addTo(cocktailMap);

    setMap(cocktailMap);
  }, []);

  useEffect(() => {
    if (map) {
      bars.forEach((bar) => {
        const marker = L.marker([bar.lat, bar.lng]).addTo(map);
        marker.bindPopup(`${bar.name}<br>${bar.description}`);
      });
    }
  }, [map]);

  return (
    <Container>
      <Box
        id="map"
        sx={{
          height: 500,
          width: '100%',
          border: '1px solid black',
          overflow: 'hidden',
          position: 'relative'
        }}
      />
    </Container>
  );
}

export default MapComponent;