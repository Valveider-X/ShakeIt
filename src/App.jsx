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


//components
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />

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
  </div>
  )
}

export default App
