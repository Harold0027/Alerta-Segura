import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Alertas from './pages/Alertas'
import Login from './components/Login'
import './index.css'

function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={usuario ? <Home user={usuario} /> : <Login onLogin={setUsuario} />} />
        <Route path="/alertas" element={<Alertas user={usuario?.email} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
