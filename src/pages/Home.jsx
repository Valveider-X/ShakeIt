import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import { Paper, Typography, Link } from '@mui/material'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


function Home() {
  return (
    <div>
      <HomeCarousel />
    </div>
  );
}

export default Home