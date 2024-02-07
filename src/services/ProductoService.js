import axios from 'axios';

const BASE_URL = 'http://localhost:8080/producto';

class ProductoService{

    getAllProducto(){
        return axios.get(BASE_URL + "/all");
    }
    
    getProductoById(id){
        return axios.get(BASE_URL + "/get-one/" + id);
    }

    createProducto(producto){
        return axios.post(BASE_URL + "/save", producto);
    }

    updateProducto (id, producto){
        return axios.put(BASE_URL + "/update/" + id, producto)
    }

    deleteProducto (id){
        return axios.delete(BASE_URL + "/delete/" + id)
    }

}

export default new  ProductoService;