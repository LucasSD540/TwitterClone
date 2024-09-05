import axios from "axios";

// Cria uma instância do Axios
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

// Função para obter o token JWT
export const fetchToken = async (username: string, password: string) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      username,
      password,
    });
    const { access } = response.data;
    console.log("Token obtido:", access); // Adiciona um log para verificar o token
    localStorage.setItem("jwtToken", access);
    return access;
  } catch (error) {
    console.error("Erro ao obter token:", error);
    throw error;
  }
};

// Interceptor para adicionar o token às requisições
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      console.log("Token recuperado para envio:", token); // Adiciona um log para verificar o token
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.log("Nenhum token encontrado");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
