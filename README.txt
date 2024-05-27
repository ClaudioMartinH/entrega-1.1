La aplicación es una todo list, con funcionalidades para agregar, modificar y eliminar tareas.
para ejecutar el proyecto hay que copiarse el repositorio y bajarselo, tener nodejs instalado en el ordenador.
se necesita asimismo instalar typescript, vitest, chalk y express; y se puede hacer ejecutando el comando:
(npm install) una vez tengamos abierto el proyecto en nuestro editor de codigo en la carpeta que contenga el proyecto

para levantar el servidor basta con entrar desde consola y ejecutar el comando: node server.cjs.
Así se levantará un servidor en el puerto 3000 del localhost.
para ejecutar la aplicacion con frontend hay que abrir nuestro navegador e introducir la siguiente direccion: 
http://localhost:3000/index.html y comenzar a usarla.
para usar las funcionalidades CLI de la misma hay que entrar en la carpeta src dentro de la carpeta dist (cd dist y posteriormente cd src) y ejecutar el siguiente comando desde consola: node appCLI.js 
para ejecutar el testing basta con ejecutar el comando: npm run test

el archivo principal del proyecto es index.ts, compilado automaticamente a index.js
el archivo para ejecutar la app en la consola es appCLI.js que viene autotanspilado de appCLI.ts
el archivo de testing con vitest es index.test.ts en la carpeta testing

