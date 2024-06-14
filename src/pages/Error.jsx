import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from "/images/logo.png"


function Error() {
  return (
    <div>
    <br/>
    <br/>
    <h2>There Must be an error, please go back</h2>
    <br/>
    <h3>Sorry for the inconvenience, please touch the Cocktail Shaker. </h3>

    <Typography className="shake" variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{color: 'inherit'}}>
          <img className="shake" src={logo} width={"200px"}/>
        </Link>
        </Typography>

    </div>
  )
}

export default Error