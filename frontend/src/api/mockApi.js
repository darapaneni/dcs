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