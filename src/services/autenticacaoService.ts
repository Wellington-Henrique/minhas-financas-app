import api from "./api";

import { AutenticacaoData } from "../interfaces/Autenticacao";

export const login = async (authentication: AutenticacaoData) => {
    return await api.post('Autenticacao', authentication)
    .then(resp => resp.data)
    .catch(error => error.message);
}