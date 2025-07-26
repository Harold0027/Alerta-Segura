import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <h1>🚨 Alerta Segura</h1>
    </div>
    <div className="navbar-right">
      <Link to="/">Nueva Alerta</Link>
      <Link to="/alertas">Reportes</Link>
    </div>
  </nav>
)

export default Navbar
