import service from "../services/config.services"
import { createContext, useEffect, useState } from "react"

const AuthContext = createContext()
function AuthWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedUserId, setloggedUserId]= useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const authenticateUser = async () =>{
        const authToken = localStorage.getItem("authToken")
        if(!authToken){
            setIsLoggedIn(false)
            setloggedUserId(null)
            setIsAuthenticating(false)
            return
        }
        try {
            const response = await service.get("/auth/verify")
            setIsLoggedIn(true)
            setloggedUserId(response.data.payload._id)
            setIsAuthenticating(false)
            
        } catch (error) {
            console.log(error); //! console log
            setIsLoggedIn(false)
            setloggedUserId(null)
            setIsAuthenticating(false)

            
        }
    }
    const passedContext = {
        isLoggedIn,
        loggedUserId,
        authenticateUser
    }
    useEffect(()=>{
        authenticateUser()

    },[])
    if (isAuthenticating === true){
        //! podria ser un spinner
        return <h3>..Autenticando usuario</h3>
    }
    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext,
    AuthWrapper
}