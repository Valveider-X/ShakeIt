import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useContext } from 'react'

function Profile(props) {
    const {isLoggedIn} = useContext(AuthContext)
    if (isLoggedIn === true){
        return props.children
    }else{
        return <Navigate to="/login"/>
    }
}

export default Profile