import axios from 'axios';

const BASE_URL = 'http://localhost:8080/cliente';

class ClienteService{

    getAllCliente(){
        return axios.get(BASE_URL + "/all");
    }
    
    getClienteById(id){
        return axios.get(BASE_URL + "/get-one/" + id);
    }

    createCliente(cliente){
        return axios.post(BASE_URL + "/save", cliente);
    }

    updateCliente (id, cliente){
        return axios.put(BASE_URL + "/update/" + id, cliente)
    }

    deleteCliente (id){
        return axios.delete(BASE_URL + "/delete/" + id)
    }

}

export default new ClienteService;