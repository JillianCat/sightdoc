import axios from 'axios';
import util from './util';

// const baseURL = 'http://dev.chinavisionrecord.com:18181/';
let baseURL;
if (window.location.href.includes('dev-local')) {
    baseURL = 'http://dev-local.chinavisionrecord.com:8888/';
} else if (window.location.href.includes('dev') || window.location.href.includes('local')) {
    baseURL = 'http://dev.chinavisionrecord.com:18181/';
} else {
    baseURL = 'https://www.chinavisionrecord.com/';
}

const service = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded"
        "X-CSRF-Token": util.getCookie('CVR_C') ? util.getCookie('CVR_C') : null
    },
    withCredentials: true
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
