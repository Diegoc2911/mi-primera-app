import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">

        <h1 className="text-4xl font-bold text-violet-600 mb-2">
          Bienvenido 👋
        </h1>
        <p className="text-gray-400 mb-8">
          Mi primera app con Next.js
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/tareas"
            className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            📝 Ver mis tareas
          </Link>
          <Link
            href="/sobre-mi"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            👤 Sobre mí
          </Link>
        </div>

      </div>
    </main>
  )
}