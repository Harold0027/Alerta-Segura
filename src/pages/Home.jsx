import ReportForm from '../components/ReportForm'

const Home = ({ user }) => (
  <div>
    <h2>Bienvenido: {user.nombre}</h2>
    <ReportForm user={user.email} />
  </div>
)

export default Home
