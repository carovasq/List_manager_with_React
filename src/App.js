import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
// import logo from './img/logo.png';
// import UserList from './componentes/ListaDeTareas';
// import '../hojas-de-estilo/ListaDeTareas.css';


function App() {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user)=> {
    setEditingUser(user);
  }
  

  const handleDelete = (user)=> {
    const confirmDelete = window.confirm(`¡¿Estas segurísisisisisisisisisisisisima de extinguir del univerrrrrrso a ${user.name}?! Si lo vas hacer, hazlo sin remordimientossssssss mi niñaaaa!`);
    if (confirmDelete){
      const updatedUsers = users.filter((u) => u !== user);
      
      setUsers(updatedUsers);
      setEditingUser(user);
    }
  };



  const onSubmit = (data)=> {
    if (editingUser) {
      const updateUsers = users.map((user)=>
      user === editingUser ? {...user, ...data} : user
      );
      setUsers(updateUsers);
      setEditingUser(null)
    } else{
      setUsers([...users, data]);
    }
    reset();
  }

  useEffect(()=> {
    axios.get('http://localhost:3000/users')
    .then(response=> setUsers(response.data))
    .catch(error => console.log(error));
  }, []);

  
  return (
    <>
      <img src="img/logo.png" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SOMBRERO SELECCIONADOR</h1>
        <label>
          Nombre
          <input
            {...register("name", { required: true })}
            defaultValue={editingUser?.name || ""}
          />
        </label>

        <label>
          Primer Apellido
          <input
            {...register("firstLastname", { required: true })}
            defaultValue={editingUser?.firstLastname || ""}
          />
        </label>

        <label>
          Segundo Apellido
          <input
            {...register("secondLastname", { required: true })}
            defaultValue={editingUser?.secondLastname || ""}
          />
        </label>

        <label>
          Email
          <input
            {...register("email", { required: true })}
            defaultValue={editingUser?.email || ""}
          />
        </label>
        
        <label>
          Teléfono
          <input
            {...register("phone", { required: true })}
            defaultValue={editingUser?.phone || ""}
          />
        </label>

        <button type="submit" value={editingUser ? "Editar" : "Enviar"}>Pa mi</button>
      </form>


      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.firstLastname}</td>
              <td>{user.secondLastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Editar</button>
                <button onClick={() => handleDelete(user)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
