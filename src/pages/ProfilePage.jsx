import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import service from '../services/config.services'
import { AuthContext } from '../context/auth.context'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardAction from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import LocalBar from '@mui/icons-material/LocalBar'
import { Star } from '@mui/icons-material'

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
        console.log("error");
        
      }
      
    }
    if (data === null){
      return <Typography variant="h6">Loading...</Typography>
    }
    
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <LocalBar sx={{ width: 100, height: 100}} />
      <Typography variant="h4" mt={2}>
        Welcome, {data.username}
      </Typography>
      <Typography variant='body1' mt={1}>
        There's your favorite Cocktails.
      </Typography>
      <Box mt={4} width="100%" maxWidth="500px">
        {data.favorites.map((eachFavorite, i)=>(
          <Card key={i} sx={{mb:2}}>
            <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-around">
              <Typography variant="h4"  >{eachFavorite.name}</Typography>
              <Button component={Link} to={`/cocktails/${eachFavorite._id}`}
              size="small"
              startIcon={<Star/>}
              sx={{
                backgroundColor: 'black',
                color: 'orange',
                '&:hover': {
                  backgroundColor: 'darkgrey',
                  },
                  }}>
                Details
              </Button>
              </Box>
                </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default ProfilePage
  {/* <div>
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
  ) */}