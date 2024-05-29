import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'


function Navbar() {
    const {authenticateUser, isLoggedIn} = useContext
    (AuthContext)
    const navigate = useNavigate()
    //Cerrar Sesión
    const handleLogOut = async() =>{
        localStorage.removeItem("authToken")
        await authenticateUser()
        navigate("/login")
    }



  return (
    <nav>
        <Link to="/">Home</Link>
        {isLoggedIn === false && <>
        <Link to="/signup">Register</Link> {/* No irá aquí, pero hay que probar*/}
        <Link to="/login">Login</Link>
        </>}
        {isLoggedIn === true && <>
        <Link to="/profile">Profile</Link>
        <Link onClick={handleLogOut}>Log Out</Link>
        </>}
    </nav>
  )
}

export default Navbar