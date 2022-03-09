import React, { useEffect } from 'react';

//  local context
import { useAuthContext } from '@/contexts/auth.context';

//  icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

//  component style
import './index.scss';



/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function Login() {

    //  get auth context login methods
    const { loginWithGoogle, loginAnonymously, logout } = useAuthContext();

    //  on initial render
    useEffect(() => {

        logout();
         
    }, []);


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
    <div id='app-login-form'>

        <h2 className='fw-bold mb-0' >Join for free</h2>


        <hr className='my-3' />
        <h3 className='fs-5 fw-bold mb-3' >Use a third-party</h3>

        <button className='w-100 py-2 mb-2 btn btn-outline-primary btn-facebook' disabled >
            <FacebookIcon />
            <span className='align-middle p-2' >Join with Facebook</span>
        </button>

        <button className='w-100 py-2 mb-2 btn btn-outline-success btn-google' onClick={ loginWithGoogle } >
            <GoogleIcon />
            <span className='align-middle p-2' >Join with Google</span>
        </button>

        <button className='w-100 py-2 mb-2 btn btn-outline-dark btn-github' disabled >
            <GitHubIcon />
            <span className='align-middle p-2' >Join with GitHub</span>
        </button>


        <hr className='my-3' />
        <h3 className='fs-5 fw-bold mb-3' >Or join as anonymous</h3>

        <button className='w-100 py-2 mb-2 btn btn-outline-secondary'  onClick={ loginAnonymously } >
            <NoAccountsIcon />
            <span className='align-middle p-2' >Join anonymously</span>
        </button>

    </div>
    </>
)};