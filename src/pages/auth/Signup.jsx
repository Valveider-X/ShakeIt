import { useState } from "react";
import axios from "axios";
import service from "../../services/config.services";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errorMessage, setErrorMessage]= useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleUsernameChange = (e) => setUsername(e.target.value)

    const handleSignup = async (e) => { e.preventDefault()

        const newUser = {
            email: email,
            password: password,
            username: username
        }
        try {
            await service.post("auth/signup", newUser)
            navigate("/login")

        } catch (error) {
            if(error.response.status=== 400){
                setErrorMessage(error.response.data.errorMessage)
            }
            console.log(error) //! console.log
            //ponemos página de error si es un error que no puede solucionar usuario(mirar)
            
        }
    }
    return(
        <div>

      <h1>Formulario de Registro</h1>
    
      <form onSubmit={handleSignup}>

        <label>Correo Electronico:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Nombre de usuario:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <br />



        

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button type="submit">Registrar</button>

        {errorMessage && <p>{errorMessage}</p>}
      </form>
      
    </div>

    )
}
export default Signup