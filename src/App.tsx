import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"

import './App.css'
import { Start } from './pages/start/start'
import { Layout } from './components/Layout/layout'
import { Login } from './pages/login/login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Main" element={<Layout/>}/> 
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}

export default App
