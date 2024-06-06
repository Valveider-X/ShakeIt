import { useState } from "react";
import axios from "axios";
import service from "../../services/config.services";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Formulario de Registro
      </Typography>

      <form onSubmit={handleSignup} style={{ width: "300px" }}>
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          label="Nombre de Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />

        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Registrar
        </Button>

        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </form>
    </Box>
  );
}
export default Signup