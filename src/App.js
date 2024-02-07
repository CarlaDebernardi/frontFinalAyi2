
import './App.css';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import im from "./f11.jpg";
import Home from './components/home/Home';
import TableCliente from './components/tables/TableCliente';
import ClienteForm from './components/form/ClienteForm';
import TableProducto from './components/tables/TableProducto';
import ProductoForm from './components/form/ProductoForm';
import Inicio from './components/inicio/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  const tituloCliente = "Listado de Clientes";
  const tituloProducto = "Listado de Productos";
  return (
    <div className="App" style={{ backgroundImage: `url(${im})`, height:"100 %"}}>
      <BrowserRouter>
      <Navbar/>
      <div className='container'> 
       <Routes>
       <Route path='/' element={<Inicio/>}></Route>
        <Route path='/ingresar' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cliente/all' element={<TableCliente titulo={tituloCliente}/>}></Route>
        <Route path='/cliente/save' element={<ClienteForm/>}></Route>
        <Route path='/cliente/update/:id' element={<ClienteForm/>}></Route>
        <Route path='/producto/all' element={<TableProducto titulo={tituloProducto}/>}></Route>
        <Route path='/producto/save' element={<ProductoForm/>}></Route>
        <Route path='/producto/update/:id' element={<ProductoForm/>}></Route>
       </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
