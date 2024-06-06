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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <Card sx={{
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 4,
            transition: "transform 0.3s ease-in-out",
            '&:hover': {
              transform: "scale(1.05)"
            },
            maxWidth: 345,
          }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Example Image"
              sx={{
                filter: 'brightness(0.8) contrast(1.2)', 
                transition: 'filter 0.3s ease-in-out',
                '&:hover': {
                  filter: 'brightness(1) contrast(1.2)'
                }
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div" color="primary">
                Example Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is an example description.
              </Typography>
            </CardContent>
          </Card>
        </Box>

  );
}

export default Home