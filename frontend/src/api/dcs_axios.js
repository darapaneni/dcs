import axios from "axios"
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import Cookies from "js-cookie";
const storedToken =Cookies.get('token');
let accessToken= Cookies.get('token');
let refresh_token=Cookies.get('refresh_token');

const baseURL= 'http://localhost:8000/api/v1/'

const DcsAxiosInstance = axios.create({
    baseURL:baseURL,
    'Content-type':'application/json',
    headers: {Authorization: storedToken ? `Bearer ${accessToken}` : ""},
});
DcsAxiosInstance.interceptors.request.use(async req =>{
    console.log(accessToken)
    if (accessToken) {

        req.headers.Authorization =storedToken ? `Bearer ${accessToken}` : ""
        const user = jwtDecode(accessToken)
        const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1
        if(!isExpired) return req
        const resp =await axios.post(`${baseURL}auth/token/refresh/`, {
            refresh:refresh_token
        })
        Cookies.set('token', resp.data.access)
        Cookies.set('refresh_token',resp.data.refresh)
        req.headers.Authorization = `Bearer ${resp.data.access}`
        return req
    }else{
        req.headers.Authorization = storedToken ? `Bearer ${storedToken}` : " "
        return req
    }
})
export default DcsAxiosInstance;
