import { useState } from 'react'
import { db } from '../service/firebase'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !nombre) {
      setError('⚠️ Todos los campos son obligatorios.')
      return
    }

    try {
      await setDoc(doc(db, 'usuarios', email), {
        email,
        nombre,
        fecha_registro: serverTimestamp()
      })

      onLogin({ email, nombre })
    } catch (err) {
      setError('❌ Error al iniciar sesión')
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  )
}

export default Login
