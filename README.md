# List_manager_with_React
Este proyecto consiste en adaptar el proyecto anterior [List Manager](https://github.com/carovasq/List_manager "List Manager") al uso de React, json, etc.

Administrar listas de usuarios de este proyecto tendrá un montón de objetos, componentes y métodos para la ejecución dinámica.

## Información del proyecto
### Contexto del proyecto
La institución educativa para la que presentaste una primera propuesta de administrador de listas está muy satisfecha con el trabajo. Contarán con tus servicios de desarrolladora web para su aplicación. Para comenzar, por razones de rendimiento y mantenibilidad, quiere que su aplicación esté desarrollada con React y le pide migrar este administrador de listas a React. Usarán la aplicación para guardar registros de alumnos


### Requisitos mínimos:
+ [ ] Generar una lista de alumnos
+ [ ] Los registros se añaden mediante formulario con los siguientes campos:
  - [ ] Nombre
  - [ ] Apellido 1
  - [ ] Apellido 2
  - [ ] Email de contacto
  - [ ] Teléfono
- [ ] Los registros se imprimen en una lista o tabla
- [ ] Un botón de guardar que almacena los datos
- [ ] Debe Ser responsive en dos vistas (desktop y dispositivo a elegir)
- [ ] Trabajo en GIT con al menos dos ramas (main y develop)
- [ ] Uso de librerías de estilos (Bootstrap u otras)
- [ ] Buenas prácticas, clean code
- [ ] HTML semántico
- [ ] Validaciones en los campos del formulario


### Extras:
- [ ] Que se puedan eliminar registros
- [ ] Que se puedan editar registros
- [ ] Readme
- [ ] Animaciones JS / CSS
- [ ] Mensajes con Sweet Alert 2 (advertencia, información, error, etc)


### Herramientas
- Visual Studio Code.
- Tecnologías mínimas obligatorias: HTML, CSS, Javascript, React, Git, Axios/Fetch, Json Server
- Recursos extra que se investiguen o que hayan sido presentados en píldoras
- GIT
- Tablero Trello.


### Criterios de rendimiento
El resultado final debe ser una interfaz de usuario construida con React, con manejo de estados y eventos y procesamiento de datos según  según lo aprendido en clase, que permita hacer CRUD de registros a una fake API 

## ... Antes de empezar
### Instalación de Node.js y npm
En este proyecto, utilizaremos nuevas tecnologías que no dimos uso en los anterior proyectos del BootCamp. Para comenzar, tenemos que tener instalados Node.js y npm. Comprueba si los tienes, ejecutando Git Bash y usa estos comandos:
```console
which node
```
```console
which npm
```
Si no los tienes, instalalos usando el siguiente link: [Node.js](https://nodejs.org/ "Página oficial de Node").

### Ejecución de Node.js y npm
Crea un proyecto haciendo uso de node.js y npm, Gestor de paquetes para los proyectos de Node.js.
1. Posicionarnos en la carpeta adecuada.
```console
cd name_directory/
```

2. Crear un nuevo proyecto Vite (entorno de desarrollo rápido para aplicaciones web basadas en JavaScript o TypeScript).
```console
npm create vite@latest
```

3. Te pedirá información de tu nuevo proyecto:nombre del proyecto. Elegimos framework React y el lenguaje JavaScript.
```console
? Project name: » name_directory_project
```

4. Acceder a la carpeta del proyecto y dentro del mismo, installar las dependencias.
```console
cd name_directory_project/
```
```console
npm install
```

5. Ejecutar el proyecto en modo de desarrollo. Te iniciará el servidor de desarrollo y te permitirá ver tu aplicación en un navegador.
```console
npm run dev
```


## ¡Comencemos!
### Acceder al Proyecto
En este proyecto, utilizaremos nuevas tecnologías que no dimos uso en los anterior proyectos del BootCamp. Para comenzar, tenemos que tener instalados Node.js y npm.

Para copiar el repositorio de este proyecto, sigue estos pasos:
1. Ejecuta Git Bash
2. Posicionarnos en la ubicación en donde quieres clonar el directorio.
```console
cd name_directory/
```

2. Escriba git clone y pegue la dirección URL que ha copiado antes.
```console
git clone https://github.com/carovasq/List_manager_with_React.git
```

3. Posicionate en el directorio del proyecto
```console
cd List_manager_with_React
```

4. Instala los paquetes: npm, json, axios y react-hook-form
```console
npm install
```

```console
npm install -g json-server
```

```console
npm install react-hook-form
```

```console
npm install axios
```

5. Ejecuta el proyecto
```console
npm run dev
```

```console
npm run start
```
