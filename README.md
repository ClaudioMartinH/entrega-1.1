# entrega-1.1 

La aplicación es una todo list, con funcionalidades para agregar, modificar y eliminar tareas.
- Para ejecutar el proyecto hay que copiarse el repositorio y bajarselo, tener **NodeJS** instalado en el ordenador.
- Se necesita asimismo instalar **typescript, vitest, chalk y express**; Se puede hacer ejecutando el comando en consola:
"npm install" teniendo el editor de codigo abierto en la carpeta donde hayamos bajado el repositorio.

- Para levantar el servidor en el puerto 3000 del localhost y ejecutar el frontend basta con entrar desde consola y ejecutar el comando: "node server.cjs" y posteriormente hacer click en este link: http://localhost:3000/index.html .

- Para usar las funcionalidades CLI de la misma hay que entrar en la carpeta src dentro de la carpeta dist (cd dist y posteriormente cd src) y ejecutar el siguiente comando desde consola: "node appCLI.js" 
- Para ejecutar el testing basta con ejecutar el comando: "npm run test"

1. el archivo principal del proyecto es index.ts, compilado automaticamente a index.js
2. el archivo para ejecutar la app en la consola es appCLI.js que viene autotanspilado de appCLI.ts
3. el archivo de testing con vitest es index.test.ts en la carpeta testing

