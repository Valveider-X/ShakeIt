import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import service from '../services/config.services'
import { AuthContext } from '../context/auth.context'
import { Link } from 'react-router-dom'


function ProfilePage() {
    const [data, setData] = useState(null)
    const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);


    useEffect(()=>{
     
      pillarData()
    },[])
    const pillarData = async()=>{
      try {
        const response = await service.get("/auth/profile")
        setData(response.data)
        
      } catch (error) {
        console.log("polla");
        
      }
      
    }
    if (data === null){
      return <p>tumadre</p>}
    
  return (
    <div>
      <p>{data.username}</p>
        <h3>Ejemplo de página privada</h3>
      <p>Solo usuarios que hayan validado credenciales deberian poder acceder</p>
      {data && data.favorites.map((eachFavorite, i)=>{
        return (
          <Link key={i} to={`/cocktails/${eachFavorite._id}`}>
          <p >{eachFavorite.name}</p>
          </Link>
        )

      })
      }


    </div>
  )
}

export default ProfilePage