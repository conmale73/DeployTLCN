import axios from 'axios';

//const apiProduction = 'https://json-kali.onrender.com';

const apiDev = 'https://json.conmale73.repl.co';
const apiProduction = 'https://json.conmale73.repl.co';

const baseURL = import.meta.env.MODE === 'production' ? apiProduction : apiDev;

const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// axiosClient.interceptors.request.use(
//     function (req) {
//         const token = JSON.parse(localStorage.getItem('token'));
//         if (token) req.headers['auth-token'] = token;
//         return req;
//     },

//     function (error) {
//         return Promise.reject(error);
//     },
// );
axiosClient.interceptors.response.use(
    function (res) {
        return res.data;
    },

    function (error) {
        return Promise.reject(error);
    },
);
export { axiosClient };
