import { Geist } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Primera App',
  description: 'Aprendiendo Next.js',
}

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        <Link href="/" className="text-violet-600 font-bold text-xl">
          ⚡ MiApp
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/tareas"
            className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors"
          >
            Tareas
          </Link>
          <Link
            href="/sobre-mi"
            className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors"
          >
            Sobre mí
          </Link>
          <Link href="/usuarios" className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors">
            Usuarios
          </Link>
          <Link href="/productos" className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors">
  Productos
</Link>
```

        </div>

      </div>
    </nav>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}