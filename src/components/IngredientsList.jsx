import axios from 'axios'
import React, { useEffect, useState } from 'react'


function IngredientsList() {
    const [ingrList, setIngrList]=useState(null)

    useEffect(()=> {
      axios
      .get(`${import.meta.env.VITE_URL_BACKEND}/ingredients`)
     .then((response)=>{
      setIngrList(response.data)
      console.log(response)
     })
     .catch((error)=>{
      console.log(error);
     })

    },[])

    if (ingrList === null){
      return <p>ESPERANDO</p> //buscar un loader.
    }



  return (
    <div>
      {ingrList.map((ingredient, i)=>{
        const ingredientId = ingredient.id
        return(
          <div key={i}>
            <p>{ingredient.name}</p>
            <p>{ingredient.hasAlcohol}</p>
            <p>{ingredient.alcoholGraduation}</p>
            <p>{ingredient.description}</p>
            <hr></hr>

          </div>
        )
      })}



    </div>
  )
}

export default IngredientsList