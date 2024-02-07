import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Table.css";
import ClienteService from '../../services/ClienteService';
import { Link } from 'react-router-dom';

const TableCliente = (props) => {
    const [cliente, setCliente] = useState ([]);
    const [error, setError] = useState("");
    const {titulo} = props;
    
    useEffect(() => {
    listarClientes()
    },[])

    const listarClientes = () => {
      ClienteService.getAllCliente()
        .then(response => {
          const cliente = response.data;
          if (cliente.length === 0) {
            setError("No hay clientes para mostrar");
          } else {
            setCliente(cliente);
          }
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const deleteCliente = (id) => {
      ClienteService.deleteCliente(id)
        .then((response) => {
          listarClientes();
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
     <div>
      <div>
      <h2 className="text-center">{titulo}</h2>
      </div>
    <table  className="table table-bordered border-primary text-align-center">
    <tr>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>FECHA DE INGRESO</th>
        <th>TELÉFONO</th>
        <th>DOMICILIO</th>
        <th>ACCIONES</th>
    </tr>
    <tbody>

       { cliente.map(
             cliente=>
        <tr key={cliente.id}>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.fechaDeIngreso}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.domicilio}</td>
            

            <td>
              <Link className="btn btn-outline-success" to={`/cliente/update/${cliente.id}`}>Actualizar</Link> 
              &nbsp; &nbsp;
              <buttom type="button" className="btn btn-outline-danger" onClick ={()=> deleteCliente(cliente.id)}> Eliminar </buttom>
            </td>
             
        </tr>
        )
        }
        </tbody>
        </table>
        {error && <p className="text-danger mt-3 text-center"><strong>{error}</strong></p>}
        <section className="py-5 text-center container"/>
            <div className="col-lg-6 col-md-8 mx-auto">
                <Link to="/cliente/save "className="btn btn-primary my-3 btn-lg">Nuevo Cliente</Link>
                &nbsp;
                &nbsp;
                <Link to="/home "className="btn btn-secondary my-3 btn-lg">Home</Link>
                </div>    
        
</div>
  )
}

export default TableCliente