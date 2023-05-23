import axios from "axios";

// Se for testar no android substitui localhost. Por seu inderelo IP
export const api = axios.create({
    baseURL: 'http://localhost:3333',
})