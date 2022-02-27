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
    <section id='login' className='shadow'>
    <div className='modal-login'>

        <h2 class='fw-bold fs-1 p-3 pb-2'>
            Join for free!
        </h2>

        <hr className='mb-4'/>
        
        <h3 class='fw-bold fs-4'>
            Use a third-party
        </h3>

        <button className='w-100 btn btn-outline-primary p-2 my-2' disabled>
            Join with Facebook
        </button>

        <button className='w-100 btn btn-outline-success p-2 my-2' onClick={ processLoginWithGoogle }>
            Join with Google
        </button>

        <button className='w-100 btn btn-outline-secondary p-2 my-2' disabled>
            Join with GitHub
        </button>

        <hr className='mb-4'/>
        
        <h3 class='fw-bold fs-4'>
            Or join as anonymous
        </h3>

        <button className='w-100 btn btn-outline-dark p-2 my-2' disabled>
            Join anonymously
        </button>

    </div>
    </section>
)};