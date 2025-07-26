import { useEffect, useState } from 'react'
import { db } from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore'

const ReportList = ({ userEmail = null }) => {
  const [reportes, setReportes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'reportes'))
      let data = snapshot.docs.map(doc => doc.data())
      if (userEmail) {
        data = data.filter(r => r.email === userEmail)
      }
      setReportes(data)
    }
    fetchData()
  }, [userEmail])

  return (
    <div>
      {reportes.length === 0 && <p>No hay reportes.</p>}
      {reportes.map((r, i) => (
        <div key={i} className="reporte-card">
          <b>{r.tipo?.toUpperCase()}</b> – {r.descripcion}<br />
          📍 {r.ubicacion} | 📅 {r.fecha} <br />
          🟢 Estado: {r.estado}<br />
        </div>
      ))}
    </div>
  )
}

export default ReportList
