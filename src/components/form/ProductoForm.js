import React, {useEffect, useState} from 'react'

import ProductoService from '../../services/ProductoService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const ProductoForm = () => {
    const [plu, setPlu] = useState("");
    const [codigoEan, setCodigoEan] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [marca, setMarca] = useState("");
    const [tipo, setTipo] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
  
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

  const saveOrUpdateProducto= (e) => {
    e.preventDefault();
    const producto = {plu, codigoEan, nombre, descripcion,marca, tipo, precio, stock}; 


    if(id){
      ProductoService.updateProducto(id, producto).then((response) =>{
        console.log(response.data);
        navigate("/producto/all");
    }).catch(error=>{
        console.log(error)
    })

    } else{
      ProductoService.createProducto(producto).then((response) =>{
        console.log(response.data);
        navigate("/producto/all");
    }).catch(error=>{
        console.log(error)
    })
    }
    
  }

  useEffect (() =>{
    ProductoService.getProductoById(id).then((response)=>{
        setPlu(response.data.plu);
        setCodigoEan(response.data.codigoEan);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setMarca(response.data.marca);
        setTipo(response.data.tipo);
        setPrecio(response.data.precio);
        setStock(response.data.stock);
    }).catch(error=>{
        console.log(error);
    })
  }, [])
  const titulo = () => {
    if (id){
        return <h2 className="text-center">ACTUALIZAR PRODUCTO</h2>
    }
    else{
        return <h2 className="text-center">CARGAR UN NUEVO PRODUCTO</h2>
    }
 }

  return (
    <div>
      <div className="container-fluid m-5">
        <h2 className="text-center">{titulo()}</h2>

        <div className="text-center container">
          <form class="formulario  ">
          <div class="form-group mb-2">
              <label className="form-label">Código PLU </label>
              <input
                type="text"
                name="plu"
                value={plu}
                onChange={(e) => setPlu(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Código Ean </label>
              <input
                type="text"
                name="codigoEan"
                value={codigoEan}
                onChange={(e) => setCodigoEan(e.target.value)}
              />
            </div>
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
              <label className="form-label">Descripción </label>
              <input
                type="text"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Marca </label>
              <input
                type="text"
                name="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Tipo</label>
              <input
                type="text"
                name="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label"> Precio </label>
              <input
                type="text"
                name="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>
            <div class="form-group mb-2">
              <label className="form-label">Stock</label>
              <input
                type="text"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <br />
            </div>

            <br />
            <br />
            <section class=" text-center container">
              <button
                className="btn btn-primary my-2 btn-lg"
                onClick={(e) => saveOrUpdateProducto(e)}
              >
                Guardar
              </button>
              &nbsp;
              <Link
                to="/producto/all"
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

export default ProductoForm
