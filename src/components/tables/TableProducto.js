import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Table.css";
import ProductoService from '../../services/ProductoService';
import { Link } from 'react-router-dom';

const TableProducto = (props) => {
    const [producto, setProducto] = useState ([]);
    const [error, setError] = useState("");
    const {titulo} = props;
    
    useEffect(() => {
    listarProductos()
    },[])

    const listarProductos = () => {
      ProductoService.getAllProducto()
        .then(response => {
          const producto = response.data;
          if (producto.length === 0) {
            setError("No hay productos para mostrar");
          } else {
            setProducto(producto);
          }
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const deleteProducto = (id) => {
        ProductoService.deleteProducto(id)
        .then((response) => {
          listarProductos();
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
        <th>CÓDIGO PLU</th>
        <th>CÓDIGO EAN</th>
        <th>NOMBRE</th>
        <th>DESCRIPCIÓN</th>
        <th>MARCA</th>
        <th>TIPO</th>
        <th>PRECIO</th>
        <th>STOCK</th>
        <th>ACCIONES</th>
    </tr>
    <tbody>

       { producto.map(
             producto=>
        <tr key={producto.plu}>
            <td>{producto.plu}</td>
            <td>{producto.codigoEan}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.marca}</td>
            <td>{producto.tipo}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>
              <Link className="btn btn-outline-success" to={`/producto/update/${producto.plu}`}>Actualizar</Link> 
              &nbsp; &nbsp;
              <buttom type="button" className="btn btn-outline-danger" onClick ={()=> deleteProducto(producto.plu)}> Eliminar </buttom>
            </td>
             
        </tr>
        )
        }
        </tbody>
        </table>
        {error && <p className="text-danger mt-3 text-center"><strong>{error}</strong></p>}
        <section className="py-5 text-center container"/>
            <div className="col-lg-6 col-md-8 mx-auto">
                <Link to="/producto/save "className="btn btn-primary my-3 btn-lg">Nuevo Producto</Link>
                &nbsp;
                &nbsp;
                <Link to="/home "className="btn btn-secondary my-3 btn-lg">Home</Link>
                </div>    
        
</div>
  )
}

export default TableProducto