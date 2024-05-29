import React, { useEffect, useState } from 'react'
import axios from 'axios'
import service from '../services/config.services'

function ProfilePage() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        service.get("/auth/profile")
        .then((response)=>{
            console.log(response) //! console.log
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        <h3>Ejemplo de página privada</h3>
      <p>Solo usuarios que hayan validado credenciales deberian poder acceder</p>

    </div>
  )
}

export default ProfilePage