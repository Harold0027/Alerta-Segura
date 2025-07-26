import ReportList from '../components/ReportList'

const Alertas = ({ user }) => (
  <div>
    <h2>📋 Todos los reportes</h2>
    <ReportList />
    <h2>🧍 Mis reportes</h2>
    {user ? <ReportList userEmail={user} /> : <p>Inicia sesión para ver tus reportes.</p>}
  </div>
)

export default Alertas
