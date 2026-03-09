'use client'

import { useState, useEffect } from 'react'

export default function Productos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data)
        setCargando(false)
      })
  }, [])

  async function agregarProducto() {
    if (!nombre || !precio) return

    const res = await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio: Number(precio) })
    })

    const nuevoProducto = await res.json()
    setProductos(prev => [...prev, nuevoProducto])
    setNombre('')
    setPrecio('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-violet-600 mb-2">Productos</h1>
        <p className="text-gray-400 text-sm mb-6">Tu primera API propia ✨</p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6 flex gap-2">
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre del producto"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="number"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
            placeholder="Precio"
            className="w-28 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            onClick={agregarProducto}
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Agregar
          </button>
        </div>

        {cargando ? (
          <p className="text-violet-400 animate-pulse text-center">Cargando...</p>
        ) : (
          <div className="flex flex-col gap-3">
            {productos.map(p => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-800">{p.nombre}</p>
                  <p className="text-gray-400 text-sm">Stock: {p.stock}</p>
                </div>
                <span className="text-violet-600 font-bold text-lg">
                  ${p.precio}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}