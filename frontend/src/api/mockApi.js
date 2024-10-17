/**
 * A mock API function to simulate user login.
 * It checks if the provided email and password match one of the predefined users.
 * If the credentials are valid, it returns the user's data and a dummy token.
 * If the credentials are invalid, it rejects the promise with an error message.
 * 
 * @function mockLoginApi
 * @param {string} email - The email provided by the user for login.
 * @param {string} password - The password provided by the user for login.
 * @returns {Promise<Object>} A promise that resolves to an object containing user data and a token,
 * or rejects with an error message if credentials are invalid.
 * 
 * @example
 * mockLoginApi('user1@m.com', 'password1')
 *   .then(response => {
 *      console.log(response); // { userData: { email: 'user1@m.com', userName: 'User 1' }, token: 'dummy_token' }
 *   })
 *   .catch(error => {
 *      console.error(error); // 'Invalid credentials'
 *   });
 */
export const mockLoginApi = ( email, password ) =>
{
    // Predefined users
    const users = [
        { email: 'user1@m.com', password: 'password1', userName: 'User 1' },
        { email: 'user2@m.com', password: 'password2', userName: 'User 2' },
    ];
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            const user = users.find(
                ( user ) => user.email === email && user.password === password
            );

            if ( user )
            {
                resolve( { userData: { email: user.email, userName: user.userName }, token: 'dummy_token' } );
            } else
            {
                reject( 'Invalid credentials' );
            }
        }, 1000 );
    } );
};