import Link from 'next/link'

export default function SobreMi() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">

        <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
          🧑‍💻
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-1">Tu Nombre</h1>
        <p className="text-violet-500 font-medium mb-4">Desarrollador Full Stack</p>
        <p className="text-gray-400 text-sm mb-8">
          Aprendiendo React y Next.js para construir el futuro 🚀
        </p>

        <Link
          href="/"
          className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Volver al inicio
        </Link>

      </div>
    </main>
  )
}