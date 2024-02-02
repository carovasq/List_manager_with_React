// import React, { useState } from 'react';
// import '../hojas-de-estilo/TareaFormulario.css';
// import { v4 as uuidv4 } from 'uuid';

// function UserFormulario(props) {

//   const [input, setInput] = useState('');

//   const manejarCambio = e => {
//     setInput(e.target.value);
//   }

//   const manejarEnvio = e => {
//     e.preventDefault();
    
//     const tareaNueva = {
//       id: uuidv4(),
//       texto: input,
//       completada: false
//     }

//     props.onSubmit(tareaNueva);
//   }

//   return (
//     <form 
//       className='tarea-formulario'
//       onSubmit={manejarEnvio}>
//       <label className='label'>Nombre</label>
//       <input 
//         className='tarea-input'
//         type='text'
//         placeholder='Me dijiste te llamabas...'
//         name='texto'
//         onChange={manejarCambio}
//       />

//       <label className='label'>Primer Apellido</label>
//       <input 
//         className='tarea-input'
//         type='text'
//         placeholder='Todos tenemos un primer apellido'
//         name='texto'
//         onChange={manejarCambio}
//       />

//       <label className='label'>Segundo Apellido</label>
//       <input 
//         className='tarea-input'
//         type='text'
//         placeholder='... Y un segundo apellido'
//         name='texto'
//         onChange={manejarCambio}
//       />

//       <label className='label'>Email</label>
//       <input 
//         className='tarea-input'
//         type='email'
//         placeholder='¡Seamos amigos de correspondencia!'
//         name='texto'
//         onChange={manejarCambio}
//       />

//       <label className='label'>Teléfono</label>
//       <input 
//         className='tarea-input'
//         type='tel'
//         placeholder='Dame tu número mami'
//         name='texto'
//         onChange={manejarCambio}
//       />


//       <button className='tarea-boton'>
//         Añadir usuario
//       </button>
//     </form>
//   );
// }

// export default UserFormulario;
