import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.31.247:3333'
})

