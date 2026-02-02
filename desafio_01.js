import os from 'node:os'
 //Desafio 1
console.log('Sistema Operativo:', os.platform())
console.log('Arquitectura:', os.arch())
console.log('CPU:', os.cpus()[0].model)
console.log('Memoria Total (GB):', (os.totalmem() / 1e9).toFixed(2))
console.log('Memoria Libre (GB):', (os.freemem() / 1e9).toFixed(2))
