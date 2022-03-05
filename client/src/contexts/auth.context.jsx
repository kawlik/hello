import React, { createContext, useContext, useEffect, useState } from 'react';

//  local services
import { getAuthWithGoogle, getAuthAnonymously } from '@/services/firebase.service';
import { saveUser, readUser, deleteUser } from '@/services/storage.service';


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

    async function loginAnonymously() {

        //  await for user
        const authUser = await getAuthAnonymously();

        //  test and set user
        if( authUser ) setUser( authUser );
    };

    //  user logout
    function logout() {

        //  remove user
        setUser( null );

        //  delete user
        deleteUser();
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

    }, [ user ]);

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <AuthContext.Provider value={{

        //  context data refrences
        user,

        //  logging functions
        loginWithGoogle,
        loginAnonymously,

        //  logout user
        logout,

    }}>

        { children }

    </AuthContext.Provider>
)};