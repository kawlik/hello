import React, { createContext, useContext, useEffect, useState } from 'react';

//  local services
import { getAuthWithGoogle } from '@/services/firebase.service';
import { saveUser, readUser } from '@/services/storage.service';


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
        const authUser = await getAuthWithGoogle();

        //  test and set user
        if( authUser ) setUser( authUser );
    };

    //  save user whne logged
    function saveLogedUser() {

        //  test if user is logged
        if( user ) { saveUser( user ); };
    };

    //  read user if exist in local storage
    function readSavedUser() {

        //  test if user is not logged
        if( !user ) {

            //  read saved user
            const savedUser = readUser();

            //  test and set user
            if( savedUser ) setUser( savedUser );
        };
    };


    //  component lifecycles
    useEffect(() => {

        //  storage functions
        saveLogedUser();
        readSavedUser();

        console.log( user );

    }, [ user ]);

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <AuthContext.Provider value={{

        //  context data refrences
        user,

        //  functions
        loginWithGoogle,

    }}>

        { children }

    </AuthContext.Provider>
)};