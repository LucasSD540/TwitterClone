import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lucassd540.pythonanywhere.com/",
});

export const fetchToken = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "https://lucassd540.pythonanywhere.com/api/username-login/",
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
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
