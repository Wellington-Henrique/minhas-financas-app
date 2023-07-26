import { DespesaData } from "../interfaces/Despesa";
import api from "./api";

export const createDespesa = async (despesa: DespesaData) => {
    return await api.post(`Despesas`, despesa)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const updateDespesa = async (despesa: DespesaData) => {
    return await api.put(`Despesas`, despesa)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const deleteDespesa = async (id: number) => {
    return await api.delete(`Despesas?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const closeDespesa = async (id: number) => {
    return await api.put(`Despesas/Close?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const openDespesa = async (id: number) => {
    return await api.put(`Despesas/Open?id=${id}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

export const getDespesasByDate = async (startDate: string, endDate: string) => {
    return await api.get(`Despesas?startDate=${startDate}&endDate=${endDate}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}

