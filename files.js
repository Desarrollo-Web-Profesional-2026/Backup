
//Desafio 2 
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

let usuarios = []

try {
  if (existsSync('usuarios.json')) {
    const data = await readFile('usuarios.json')
    usuarios = JSON.parse(data)
  }
} catch {}

usuarios.push({ nombre: 'Ale Alondra', email: 'adam@climb.ing' })

await writeFile('usuarios.json', JSON.stringify(usuarios, null, 2))
console.log(usuarios)


