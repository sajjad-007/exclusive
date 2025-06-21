import axios from "axios";

//to hide my common api 
const axiosinstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});

export {axiosinstance}