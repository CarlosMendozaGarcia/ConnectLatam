import {
  Routes,
  Route,
  Navigate,  
} from "react-router-dom"

import './App.css'
import {Start} from'./pages/start/start.jsx'
import { Home } from './pages/home/home.jsx'
import { AboutUs } from './pages/aboutUs/aboutUs.jsx'
import { Tutorials } from './pages/tutorials/tutorials.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Tutorials" element={<Tutorials/>} />
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}

export default App
