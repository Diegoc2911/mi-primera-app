'use client'

import { useState } from 'react'

function Tarea({ texto, completada, onCompletar, onEliminar }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
      <input
        type="checkbox"
        checked={completada}
        onChange={onCompletar}
        className="w-5 h-5 accent-violet-500 cursor-pointer"
      />
      <span className={`flex-1 text-gray-700 ${completada ? 'line-through text-gray-400' : ''}`}>
        {texto}
      </span>
      <button
        onClick={onEliminar}
        className="text-red-400 hover:text-red-600 text-sm font-bold"
      >
        ✕
      </button>
    </div>
  )
}

export default function Home() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Crear mi primera app', completada: false },
    { id: 3, texto: 'Lanzar mi startup', completada: false },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  function completarTarea(id) {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  function agregarTarea() {
    if (nuevaTarea.trim() === '') return
    setTareas([...tareas, {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    }])
    setNuevaTarea('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') agregarTarea()
  }

  const completadas = tareas.filter(t => t.completada).length

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

        {/* Header */}
        <h1 className="text-3xl font-bold text-violet-600 mb-1">Mi Lista</h1>
        <p className="text-gray-400 text-sm mb-6">
          {completadas} de {tareas.length} tareas completadas
        </p>

        {/* Barra de progreso */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            className="bg-violet-500 h-2 rounded-full transition-all duration-500"
            style={{ width: tareas.length ? `${(completadas / tareas.length) * 100}%` : '0%' }}
          />
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Agregar nueva tarea..."
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            onClick={agregarTarea}
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Agregar
          </button>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-2">
          {tareas.length === 0 && (
            <p className="text-center text-gray-400 py-8">¡No hay tareas! 🎉</p>
          )}
          {tareas.map(tarea => (
            <Tarea
              key={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              onCompletar={() => completarTarea(tarea.id)}
              onEliminar={() => eliminarTarea(tarea.id)}
            />
          ))}
        </div>

      </div>
    </main>
  )
}