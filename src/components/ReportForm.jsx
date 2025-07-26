import { useState } from 'react'
import { db } from '../service/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const ReportForm = ({ user }) => {
  const [form, setForm] = useState({
    tipo: '',
    descripcion: '',
    ubicacion: '',
    fecha: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validaciones
    if (!form.tipo || !form.descripcion || !form.ubicacion || !form.fecha) {
      setError('Todos los campos son obligatorios.')
      return
    }

    try {
      await addDoc(collection(db, 'reportes'), {
        ...form,
        email: user,
        estado: 'pendiente',
        prioridad: 'media',
        creado: serverTimestamp()
      })

      alert('Reporte enviado ✅')
      setForm({ tipo: '', descripcion: '', ubicacion: '', fecha: '' })
      setError('')
    } catch (err) {
      setError('Error al guardar el reporte.')
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nuevo Reporte</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <select name="tipo" value={form.tipo} onChange={handleChange}>
        <option value="">Tipo de incidente</option>
        <option value="robo">Robo</option>
        <option value="basura">Basura</option>
        <option value="alumbrado">Falla de alumbrado</option>
        <option value="emergencia">Emergencia médica</option>
      </select>
      <input name="ubicacion" placeholder="Ubicación" value={form.ubicacion} onChange={handleChange} />
      <input name="fecha" type="datetime-local" value={form.fecha} onChange={handleChange} />
      <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ReportForm
