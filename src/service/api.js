import axios from 'axios';

const api = axios.create({
    baseURL: 'http://sujeitoprogramador.com/r-api',
})

export default api;