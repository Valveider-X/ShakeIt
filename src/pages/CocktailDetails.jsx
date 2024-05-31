import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function CocktailDetails() {
    const params = useParams()

    const [cocktailDetails, setCocktailDetails]=useState(null)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_URL_BACKEND}/cocktails/${params.cocktailId}`)
        .then((response)=>{
            
            setCocktailDetails(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        

    },[])
    
    
    

    if (cocktailDetails === null){
        return <h1>ESPERA</h1>
    }
  return (
    <div>
        <h3>{cocktailDetails.name}</h3>
        <img src={cocktailDetails.img}/>
        <h6>{cocktailDetails.category}</h6>
        <h6>{cocktailDetails.description}</h6>
        <h6>{cocktailDetails.steps}</h6>
        {cocktailDetails.ingredients.map((eachIngredient, index)=>{
            
            return(
                
                <ul key={index}>
                    {eachIngredient.map((ingredientCategory)=>{
                        return(
                            <li key={ingredientCategory._id}>
                    <h6>{ingredientCategory.name}</h6>
                    <h6>{ingredientCategory.hasAlcohol}</h6>
                    <h6>{ingredientCategory.alcoholGraduation}</h6>
                    <img src={ingredientCategory.img}/>
                    <h6>{ingredientCategory.description}</h6>
                </li>

                        )
                    })}
                
                </ul>
    
                    
                
                
                )
        })}
        <h6>{cocktailDetails.ingredients}</h6>
    </div>
  )
}


export default CocktailDetails