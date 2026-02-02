import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Bienvenido')
  } else if (req.url === '/users') {
    res.setHeader('Content-Type', 'application/json')
    res.end(readFileSync('usuarios.json'))
  } else {
    res.statusCode = 404
    res.end('Ruta no encontrada')
  }
})

server.listen(3000)