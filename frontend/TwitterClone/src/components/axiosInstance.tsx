import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const fetchToken = async (username: string, password: string) => {
  try {
    console.log("Dados enviados:", { username, password });

    const response = await axios.post(
      "http://127.0.0.1:8000/api/username-login/",
      {
        username,
        password,
      }
    );
    const { access } = response.data;
    console.log("Token obtido:", access);
    localStorage.setItem("jwtToken", access);
    return access;
  } catch (error) {
    console.error("Erro ao obter token:", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      console.log("Token recuperado para envio:", token);
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.log("Nenhum token encontrado");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
