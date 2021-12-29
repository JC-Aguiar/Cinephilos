import axios from '../../node_modules/axios';

const dataExemplo = {
    email: "jcostalaguiar@gmail.com",
    senha: "Cebola21",
}

const config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8010/*",
        "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "60000",
    },
};

export async function postRequest(url: string, data: any, ) {
    return await axios.post(`http://localhost:8010/${url}`, data, config);
}
