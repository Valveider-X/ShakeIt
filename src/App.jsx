import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Profile from './components/Profile'
import ProfilePage from './pages/ProfilePage'
import IngredientsList from './components/IngredientsList'
import CocktailList from './pages/CocktailList'
import CocktailDetails from './pages/CocktailDetails'

//MUI
import { Container, Box, Typography, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './themes'
import { ThemeProvider } from '@emotion/react'



//components
import Navbar from './components/Navbar'


function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

    <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="5vh"
        flexDirection="column"
        sx={{
          p:{xs: 2, md: 4},
          bgcolor: "background.default",
          color: "text.primary",
        }}
        >
           <Box mt={2}>
            <Typography variant="body1"></Typography>
          </Box> 
        </Box>
    </Container>

    <br />
    <hr />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile> <ProfilePage /> </Profile> } />
      <Route path="/ingredients" element={<IngredientsList />}/>
      <Route path="/cocktails" element={<CocktailList />}/>
      <Route path="/cocktails/:cocktailId" element={<CocktailDetails />}/>

      {/* error FE routes here... */}

    </Routes>
    </ThemeProvider>
  )
}

export default App
