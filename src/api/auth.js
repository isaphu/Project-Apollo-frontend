import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;


export const login = (login_name, password) => {
    console.log(login_name)
    return axios.post(`${backendUrl}/auth/login`, {login_name, password} )
}