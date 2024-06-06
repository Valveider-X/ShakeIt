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
import CocktailIce from './pages/CocktailIce'

//MUI
import { Container, Box, Typography, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'



//components
import Navbar from './components/Navbar'
import CocktailMap from './pages/CocktailMap'
import CocktailUtensils from './pages/CocktailUtensils'
import CocktailsTechniques from './pages/CocktailsTechniques'
import MapComponent from './components/MapComponent'
import MakeCocktail from './pages/MakeCocktail'
import CocktailEdit from './pages/CocktailEdit'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',
    },
    background: {
      default: '#121212',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.7)',
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: 4,
        },
      },
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
  
      

    <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
    

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile> <ProfilePage /> </Profile> } />
      <Route path="/ingredients" element={<IngredientsList />}/>
      <Route path="/cocktails" element={<CocktailList />}/>
      <Route path="/cocktails/:cocktailId" element={<CocktailDetails />}/>
      <Route path="/cocktail/:cocktailId/edit" element={<CocktailEdit />}/>
      <Route path="/articles/ice" element={<CocktailIce />}/>
      <Route path="/articles/utensils" element={<CocktailUtensils />}/>
      <Route path="/articles/techniques" element={<CocktailsTechniques />}/>
      <Route path="/create-cocktail" element={<MakeCocktail />}/>
      <Route path="/bars" element={<CocktailMap />} />

      {/* error FE routes here... */}

    </Routes>
    </ThemeProvider>
  )
}

export default App
