import axios from 'axios';

const api = axios.create({
    baseURL: 'https://randomuser.me/api/?results=30'
})

export default api;