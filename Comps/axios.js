import axios from "axios";

const AxiosApi = axios.create({
  baseURL: "http://172.20.10.13:3000",
});

export default AxiosApi;
