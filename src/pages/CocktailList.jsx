import axios from 'axios'
import React, { useEffect, useState } from 'react'
useState
import { Link } from 'react-router-dom'
import service from '../services/config.services'


function CocktailList() {
    const [cocktailList, setCocktailList]=useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await service.get(`${import.meta.env.VITE_URL_BACKEND}/api/cocktails`)
                setCocktailList(response.data)
            }catch(error){
                console.log(error);
            }
        }
        getData()

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
                    <img src={cocktail.imageUrl} width={100}/>
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