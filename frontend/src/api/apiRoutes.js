const API_BASE_URL = process.env["DCS_API_BASE_URL "]
const apiRoutes = {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    getUsers: `${API_BASE_URL}/users`,
    getUserByEmail: (email) => `${API_BASE_URL}/users/${email}`,
    updateUser: (id) => `${API_BASE_URL}/users/${id}`,
    deleteUser: (id) => `${API_BASE_URL}/users/${id}`,
};
export default apiRoutes;