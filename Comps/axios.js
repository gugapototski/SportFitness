import axios from "axios";

const AxiosApi = axios.create({
  baseURL: "http://172.30.224.1:3000",
});

export default AxiosApi;
