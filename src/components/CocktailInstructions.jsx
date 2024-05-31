import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function CocktailInstructions() {
    const [instructionList, setInstructionList]=useState(null)

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_URL_BACKEND}/cocktails/`)
    })
  return (
    <div>CocktailInstructions</div>
  )
}

export default CocktailInstructions