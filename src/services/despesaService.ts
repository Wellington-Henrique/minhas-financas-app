import api from "./api";

import { DespesaData } from "../interfaces/Despesa";

export const createDespesa = async (despesa: DespesaData, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.post(`Despesas`, despesa)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const updateDespesa = async (despesa: DespesaData, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.put(`Despesas`, despesa)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const deleteDespesa = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.delete(`Despesas?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const closeDespesa = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    return await api.put(`Despesas/Close?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const openDespesa = async (id: number, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await api.put(`Despesas/Open?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const getDespesasByDate = async (startDate: string, endDate: string, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await api.get(`Despesas?startDate=${startDate}&endDate=${endDate}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

