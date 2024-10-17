/**
 * Base URL for the API, retrieved from environment variables.
 * @constant {string} API_BASE_URL - The base URL for the API endpoints.
 */
const API_BASE_URL = process.env["DCS_API_BASE_URL "]
/**
 * Object containing the various API routes for authentication and user management.
 * Each property is a string or a function that returns the appropriate API endpoint.
 * 
 * @namespace apiRoutes
 * @property {string} login - The API route for user login.
 * @property {string} register - The API route for user registration.
 * @property {string} getUsers - The API route for fetching all users.
 * @property {function(string): string} getUserByEmail - Function to get the API route for fetching a user by email.
 * @property {function(string): string} updateUser - Function to get the API route for updating a user by their ID.
 * @property {function(string): string} deleteUser - Function to get the API route for deleting a user by their ID.
 */

/**
* The API route for user login.
* @type {string}
*/
const apiRoutes = {
    login: `${API_BASE_URL}/auth/login`,
    /**
     * The API route for user registration.
     * @type {string}
     */
    register: `${API_BASE_URL}/auth/register`,
    /**
     * The API route for fetching all users.
     * @type {string}
     */
    getUsers: `${API_BASE_URL}/users`,
    /**
     * Function to get the API route for fetching a user by their email.
     * @function
     * @param {string} email - The email of the user.
     * @returns {string} The API route for fetching the user by email.
     */
    getUserByEmail: (email) => `${API_BASE_URL}/users/${email}`,
    /**
     * Function to get the API route for updating a user by their ID.
     * @function
     * @param {string} id - The ID of the user.
     * @returns {string} The API route for updating the user by ID.
     */
    updateUser: (id) => `${API_BASE_URL}/users/${id}`,
    /**
     * Function to get the API route for deleting a user by their ID.
     * @function
     * @param {string} id - The ID of the user.
     * @returns {string} The API route for deleting the user by ID.
     */
    deleteUser: (id) => `${API_BASE_URL}/users/${id}`,
};
export default apiRoutes;