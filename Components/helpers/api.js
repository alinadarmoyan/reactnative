import axios from 'axios';

const api = axios.create({
    baseURL: 'https://travelbriefing.org/'   
});

export default api;