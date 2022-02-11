import axios from "axios";

const instance = axios.create({
    baseURL: '...' // The APi (cloud function )URL
});

export default instance;