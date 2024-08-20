import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.web-xperts.xyz/team/webservices/ReactApi/',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default api;