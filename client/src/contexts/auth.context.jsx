import React, { createContext, useContext, useEffect, useState } from 'react';

//  local services
import { getAuthWithGoogle } from '@/services/firebase.service';


/*  Component Context
/*   *   *   *   *   *   *   *   *   *   */

//  export context object
export const AuthContext = createContext();

//  export context domain
export function useAuthContext() {
    return useContext( AuthContext );
};


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function AuthProvider({ children }) {

    //  auth context user
    const [ user, setUser ] = useState( null );


    //  login functions
    async function loginWithGoogle() {

        //  await for user
        const user = await getAuthWithGoogle();

        //  test and set user
        if( user ) setUser( user );
    };


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <AuthContext.Provider value={{

        //  refrences
        user,   //  context user object

        //  functions
        loginWithGoogle,

    }}>

        { children }

    </AuthContext.Provider>
)};