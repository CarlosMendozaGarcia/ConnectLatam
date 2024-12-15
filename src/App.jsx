import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,  
} from "react-router-dom"

import './App.css'
import {Start} from'./pages/start/start.jsx'
import {Home} from './pages/home/home.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
