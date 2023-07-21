import api from "./api";

export const getCategoryByType = async (type: string) => {
    return await api.get(`Categorias?tipo=${type}`)
    .then(resp => resp.data)
    .catch(error => error.message);
}