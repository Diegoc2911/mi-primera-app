'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsuarios(data)
        setCargando(false)
      })
      .catch(err => {
        setError('Error al cargar usuarios')
        setCargando(false)
      })
  }, [])

  if (cargando) return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center">
      <div className="text-violet-500 text-xl font-medium animate-pulse">
        Cargando usuarios...
      </div>
    </main>
  )

  if (error) return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center">
      <div className="text-red-500 text-xl font-medium">{error}</div>
    </main>
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-violet-600 mb-2">Usuarios</h1>
        <p className="text-gray-400 text-sm mb-6">
          Datos traídos de una API real ✨
        </p>

        <div className="flex flex-col gap-3">
          {usuarios.map(usuario => (
            <div
              key={usuario.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm">
                {usuario.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{usuario.name}</p>
                <p className="text-gray-400 text-sm">{usuario.email}</p>
              </div>
              <div className="text-gray-300 text-sm">
                {usuario.address.city}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}