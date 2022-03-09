import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//  local services
import { getAuthWithGoogle, getAuthAnonymously } from '@/services/firebase.service';
import { saveUser, readUser, deleteUser } from '@/services/storage.service';
import { routes } from '@/services/router.service';


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

    //   navigate
    const navigate = useNavigate();

    //  auth context user
    const [ user, setUser ] = useState( null );

    //  login functions base
    function login( newUser ) {

        //  test user
        if( !newUser ) { return; }
        
        //  set user
        setUser( newUser );
        
        //  navigate to proper route
        navigate( routes.apps );
    };

    //  login functions
    async function loginWithGoogle() {

        //  await for user
        const authUser = await getAuthWithGoogle();

        //  test and set user
        login( authUser );
    };

    async function loginAnonymously() {

        //  await for user
        const authUser = await getAuthAnonymously();

        //  test and set user
        login( authUser );
    };

    //  user logout
    function logout() {

        //  test if user exist
        if( !user ) { return; }

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
            login( savedUser );
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