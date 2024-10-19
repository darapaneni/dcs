/**
 * Utility functions for managing access and refresh tokens in session storage,
 * and for determining the type of request parameters based on provided values.
 * 
 * @module TokenUtils
 */

/**
 * Retrieves the access token from session storage.
 * 
 * @function getAccessToken
 * @returns {string|null} The access token as a string, or null if it does not exist.
 */

export const getAccessToken = () =>
{
    return sessionStorage.getItem( 'accessToken' );
};

/**
 * Retrieves the refresh token from session storage.
 * 
 * @function getRefreshToken
 * @returns {string|null} The refresh token as a string, or null if it does not exist.
 */
export const getRefreshToken = () =>
{
    return sessionStorage.getItem( 'refreshToken' );
};

/**
 * Sets the access token in session storage.
 * 
 * @function setAccessToken
 * @param {string} accessToken - The access token to be stored.
 * @returns {void} This function does not return a value.
 */
export const setAccessToken = ( accessToken ) =>
{
    sessionStorage.setItem( 'accessToken', `Bearer ${ accessToken }` );
};

/**
 * Sets the refresh token in session storage.
 * 
 * @function setRefreshToken
 * @param {string} refreshToken - The refresh token to be stored.
 * @returns {void} This function does not return a value.
 */
export const setRefreshToken = ( refreshToken ) =>
{
    sessionStorage.setItem( 'refreshToken', `Bearer ${ refreshToken }` );
};

/**
 * Determines the type of request parameters based on the provided value.
 * 
 * @function getType
 * @param {Object} value - The object containing request type indicators (params or query).
 * @param {any} body - The body of the request, which can be an object or any value.
 * @returns {Object} An object containing either 'params' or 'query' based on the input:
 * - If 'params' is present in value, returns an object with 'params' set to body.
 * - If 'query' is present, returns an object with 'query' set to body._id if body is an object,
 *   otherwise returns an object with 'query' set to body.
 * - Returns an empty object if neither 'params' nor 'query' is present.
 */
export const getType = ( value, body ) =>
{
    if ( value.params )
    {
        return { params: body };
    } else if ( value.query )
    {
        if ( typeof body === 'object' )
        {
            return { query: body._id };
        } else
        {
            return { query: body };
        }
    }
    return {};
};