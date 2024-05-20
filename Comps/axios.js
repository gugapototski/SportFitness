import axios from "axios";

const AxiosApi = axios.create({
  baseURL: "http://172.19.128.1:3000",
});

export default AxiosApi;
