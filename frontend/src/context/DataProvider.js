/**
 * @file DataProvider.js
 * @description This module defines a context provider for managing account-related data in a React application.
 *              It uses the React Context API to allow components to access and update account information
 *              without needing to pass props down manually through every level of the component tree.
 */

import { createContext, useState } from "react";

export const DataContext = createContext( null );

/**
 * @component DataProvider
 * @description A context provider component that wraps its children with a DataContext provider.
 *              It manages account information including the user's name and username.
 *              Any component wrapped within DataProvider can access and update the account state.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the DataContext.
 * @returns {JSX.Element} The DataProvider component with its children.
 */
const DataProvider = ( { children } ) =>
{
    const [ account, setAccount ] = useState( { name: '', username: '' } );

    return (
        <DataContext.Provider value={ {
            account,
            setAccount
        } }>
            { children }
        </DataContext.Provider>
    );
};

export default DataProvider;