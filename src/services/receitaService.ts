import { ReceitaData } from "../interfaces/Receita";
import api from "./api";

export const createReceita = async (receita: ReceitaData) => {
    return await api.post(`Receitas`, receita)
    .then(resp => resp.data)
    .catch(error => error.message.message);
}

export const updateReceita = async (receita: ReceitaData) => {
    return await api.put(`Receitas`, receita)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const deleteReceita = async (id: number) => {
    return await api.delete(`Receitas?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const closeReceita = async (id: number) => {
    return await api.put(`Receitas/Close?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const openReceita = async (id: number) => {
    return await api.put(`Receitas/Open?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const getReceitasByDate = async (startDate: string, endDate: string) => {
    return await api.get(`Receitas?startDate=${startDate}&endDate=${endDate}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

