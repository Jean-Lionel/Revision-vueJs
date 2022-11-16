import axios from 'axios'
import store from '../../store'

const axiosInstance = axios.create({
   //withCredentials: true,
   baseURL: store.state.baseUrl
})
// axiosInstance.defaults.headers.common['Authorization'] = "Bearer "+ store.getters.token;
// axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default  axiosInstance