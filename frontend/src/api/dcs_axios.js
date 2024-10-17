import axios from "axios"
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import Cookies from "js-cookie";
/**
 * Retrieves the stored access token from the cookies.
 * @constant {string} storedToken - The JWT access token stored in cookies.
 */
const storedToken =Cookies.get('token');
/**
 * The access token used for authorization, retrieved from cookies.
 * @type {string}
 */
let accessToken= Cookies.get('token');
/**
 * The refresh token used to obtain a new access token, retrieved from cookies.
 * @type {string}
 */
let refresh_token=Cookies.get('refresh_token');
/**
 * The base URL for API requests.
 * @constant {string} baseURL - The base URL for all API requests.
 */

const baseURL= 'http://localhost:8000/api/v1/'
/**
 * Custom Axios instance for interacting with the DCS API.
 * The instance includes default settings such as the base URL and content type.
 * It also handles authorization by adding a JWT access token to the request headers.
 * 
 * @namespace DcsAxiosInstance
 * @type {AxiosInstance}
 * @property {string} baseURL - The base URL for API requests.
 * @property {Object} headers - The headers for the request, including authorization if a token is present.
 */

const DcsAxiosInstance = axios.create({
    baseURL:baseURL,
    'Content-type':'application/json',
    headers: {Authorization: storedToken ? `Bearer ${accessToken}` : ""},
});

/**
 * Axios request interceptor that automatically refreshes the JWT access token if it is expired.
 * 
 * @function
 * @async
 * @param {Object} req - The outgoing request object.
 * @returns {Promise<Object>} The modified request with updated authorization headers.
 */
DcsAxiosInstance.interceptors.request.use(async req =>{
    console.log(accessToken) 
    if (accessToken) {   // If an access token exists, proceed to check its expiration

        req.headers.Authorization =storedToken ? `Bearer ${accessToken}` : ""
        const user = jwtDecode(accessToken)  // Decode the JWT token to check if it is expired
        const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1    // Check if the token has expired
        if(!isExpired) return req   // If the token is not expired, proceed with the request
        const resp =await axios.post(`${baseURL}auth/token/refresh/`, {  // If the token has expired, request a new access token using the refresh token
            refresh:refresh_token
        })
        // Update the access and refresh tokens in cookies
        Cookies.set('token', resp.data.access)
        Cookies.set('refresh_token',resp.data.refresh)
        req.headers.Authorization = `Bearer ${resp.data.access}`   // Set the new access token in the request headers
        return req
    }else{
        req.headers.Authorization = storedToken ? `Bearer ${storedToken}` : " "  // If no access token is available, continue without authorization
        return req
    }
})
export default DcsAxiosInstance;
