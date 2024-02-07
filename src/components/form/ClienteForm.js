import React, {useEffect, useState} from 'react'

import ClienteService from '../../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const ClienteForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaDeIngreso, setFechaDeIngreso] = useState("");
  const [telefono, setTelefono] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

  const saveOrUpdateCliente= (e) => {
    e.preventDefault();
    const cliente = {nombre, apellido, fechaDeIngreso, telefono, domicilio }; 


    if(id){
      ClienteService.updateCliente(id, cliente).then((response) =>{
        console.log(response.data);
        navigate("/cliente/all");
    }).catch(error=>{
        console.log(error)
    })

    } else{
      ClienteService.createCliente(cliente).then((response) =>{
        console.log(response.data);
        navigate("/cliente/all");
    }).catch(error=>{
        console.log(error)
    })
    }
    
  }

  useEffect (() =>{
    ClienteService.getClienteById(id).then((response)=>{
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setFechaDeIngreso(response.data.fechaDeIngreso);
        setTelefono(response.data.telefono);
        setDomicilio(response.data.domicilio);
    }).catch(error=>{
        console.log(error);
    })
  }, [])
  const titulo = () => {
    if (id){
        return <h2 className="text-center">ACTUALIZAR CLIENTE</h2>
    }
    else{
        return <h2 className="text-center">CARGAR UN NUEVO CLIENTE</h2>
    }
 }

  return (
    <div>
      <div className="container-fluid m-5">
        <h2 className="text-center">{titulo()}</h2>

        <div className="text-center container">
          <form class="formulario  ">
            <div class="form-group mb-2">
              <label className="form-label">Nombre </label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Apellido </label>
              <input
                type="text"
                name="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Fecha de Ingreso</label>
              <input
                type="text"
                name="fechaDeIngreso "
                value={fechaDeIngreso}
                onChange={(e) => setFechaDeIngreso(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label"> Teléfono </label>
              <input
                type="text"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Domicilio </label>
              <input
                type="text"
                name="domicilio "
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
              />
              <br />
            </div>

            <br />
            <br />
            <section class=" text-center container">
              <button
                className="btn btn-primary my-2 btn-lg"
                onClick={(e) => saveOrUpdateCliente(e)}
              >
                Guardar
              </button>
              &nbsp;
              <Link
                to="/cliente/all"
                className="btn btn-secondary my-2 btn-lg"
              >
                Volver
              </Link>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClienteForm
