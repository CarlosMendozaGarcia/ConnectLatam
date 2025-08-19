import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"

import {useEffect} from "react"
import './App.css'
import { Start } from './pages/start/start.jsx'
import { Home } from './pages/home/home.jsx'
import { AboutUs } from './pages/aboutUs/aboutUs.jsx'
import { Tutorials } from './pages/tutorials/tutorials.jsx'
import { News } from './pages/news/news.jsx'
import { Layout } from './components/Layout/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Main" element={<Layout/>}/> 
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}

export default App
