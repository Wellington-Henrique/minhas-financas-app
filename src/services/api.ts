import axios from 'axios'

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL
  // baseURL: "http://192.168.18.10:7120/",
  baseURL: "https://localhost:7121/",
})

api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
    console.error(error);
        
    if (error?.code === 'ERR_NETWORK')
      throw new Error("Não foi possível se conectar ao servidor!");
        
    if (error.response?.status === 405)
      throw new Error("Médodo não implementado.");

    throw new Error(error.response.data.message);
	}
)

export default api