import api from "./api";

import { ReceitaData } from "../interfaces/Receita";

export const createReceita = async (receita: ReceitaData, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.post(`Receitas`, receita)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const updateReceita = async (receita: ReceitaData, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.put(`Receitas`, receita)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const deleteReceita = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.delete(`Receitas?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const closeReceita = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.put(`Receitas/Close?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const openReceita = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.put(`Receitas/Open?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const getReceitasByDate = async (startDate: string, endDate: string, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.get(`Receitas?startDate=${startDate}&endDate=${endDate}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

