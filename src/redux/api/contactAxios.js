import axios from "axios";

const baseURL = 'https://6750288369dc1669ec19e889.mockapi.io'

export const contactAxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})