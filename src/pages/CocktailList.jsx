import axios from 'axios'
import React, { useEffect, useState } from 'react'
useState
import { Link } from 'react-router-dom'

function CocktailList() {
    const [cocktailList, setCocktailList]=useState(null)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_URL_BACKEND}/cocktails`)
   
    .then((response)=>{
        setCocktailList(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

if (cocktailList === null){
    return <h3>Esperando</h3>
}
  return (
    <div>
        {cocktailList.map((cocktail, i)=>{
            return(
                <div key={i}>
                    <Link to={"/cocktails/" + cocktail._id}>
                    <h3>{cocktail.name}</h3>
                    <img src={cocktail.img}/>
                    {/* <h3>{cocktail.category}</h3>
                    <h3>{cocktail.description}</h3>
                    <h3>{cocktail.steps}</h3> */}
                   {/* <h3>{cocktail.ingredients}</h3>
                    <h3>{cocktail.owner}</h3>  */}
                    </Link>

                </div>
            )
        })}
    </div>
  )
}

export default CocktailList