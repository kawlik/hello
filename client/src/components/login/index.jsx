import React from 'react';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function Login() {

    //  parse context data
    const { loginWithGoogle, user } = useAuthContext();

    //  loging functions
    const processLoginWithGoogle = ( event ) => {
        event.preventDefault();
        loginWithGoogle();
    };

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section id='login'>

        <button className='btn btn-outline-primary' onClick={ processLoginWithGoogle }>Login with Google</button>

        <button className='btn btn-outline-secondary' onClick={ () => console.log( user ) }>Log</button>

    </section>
)};