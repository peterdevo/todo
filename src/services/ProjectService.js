import axios from 'axios'

const baseURL = 'http://localhost:8080';

const api = axios.create({
  baseURL,
});

export const getApiProjects = () => api.get('/');
export const addApiProject = (project) => api.post('/', project);
export const updateApiProject = (project) => api.put('/', project);
export const deleteApiProject = (id) => api.delete(`/${id}`);