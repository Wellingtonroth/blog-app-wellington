import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", //QUANDO FOR PARA PRODUÇÃO SUBSTITUIR PELO ENDEREÇO DO SITE
})

export default api;