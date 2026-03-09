const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 5 },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50 },
  { id: 3, nombre: 'Teclado', precio: 80, stock: 30 },
  { id: 4, nombre: 'Monitor', precio: 350, stock: 12 },
]

export async function GET() {
  return Response.json(productos)
}

export async function POST(request) {
  const body = await request.json()

  const nuevoProducto = {
    id: Date.now(),
    nombre: body.nombre,
    precio: body.precio,
    stock: body.stock ?? 0
  }

  productos.push(nuevoProducto)
  return Response.json(nuevoProducto, { status: 201 })
}