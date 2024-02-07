import React from "react";
import img from "./descarga__1_-removebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className=" d-flex align-items-center justify-content-center">
        <img className="imagen" src={img} alt="imagenAyi" height={300}></img>
      </div>
      <div className=" d-flex align-items-center justify-content-center">
        <div>
          <Link className="btn btn-primary my-2 btn-lg" to="/cliente/all">
            Gestión de Clientes
          </Link>
        </div>
        &nbsp; &nbsp;
        <div>
          <Link to="/producto/all" className="btn btn-secondary my-2 btn-lg">
            Gestión de Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
