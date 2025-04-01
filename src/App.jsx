import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,  
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
    </Routes>
  )
}

export default App
