import React from 'react'
import Carousel from "react-material-ui-carousel"
import makeCocktail from "/images/make-your-cocktail.jpg"
import cocktailList from "/images/cocktail-list.jpg"
import ice from "/images/ice.jpg"
import tools from "/images/tools.jpg"
import techniques from "/images/stir.jpg"
import { Link } from 'react-router-dom'
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'

function HomeCarousel() {
  return (
   <Carousel >

    
        <Link to ="/make-cocktail">
    <img src ={makeCocktail} style={{width: "200px", height: "300px"}} alt="Make your cocktail"/>
    
    <h3>Make your Cocktail</h3>
    <p>Create your own cocktail with our ingredients</p>
   


        </Link>
    
    <img src = {cocktailList} style={{width: "200px", height: "300px"}}  alt= "Cocktail List" />
    <img src = {ice} style={{width: "200px", height: "300px"}}  alt= "Hielo" />
    <img src = {tools} style={{width: "200px", height: "300px"}}  alt= "Tools" />
    <img src = {techniques} style={{width: "200px", height: "300px"}}  alt= "Techniques" />
</Carousel>
  )
}

export default HomeCarousel