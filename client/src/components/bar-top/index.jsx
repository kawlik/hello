import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local service
import { paths } from '@/services/router.service';

//  icons
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function BarTop() {

    //  get user
    const { user, logout } = useAuthContext();

    //   location and navigate
    const location = useLocation();
    const navigate = useNavigate();
    
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-bar-top' key={ user } >
    {
        user
        ? <>
            <button className='btn' onClick={ () => navigate(-1) } >
                <ArrowCircleLeftIcon />
                <small className='text-muted align-middle p-2' >{ paths[ location.pathname ] }</small>
            </button>

            <button className='btn' onClick={ () => logout() } >
                <LogoutIcon />
            </button>
        </>
        : <>
            <button className='btn' >
                <InfoIcon />
                <small className='text-muted align-middle p-2' >Need help?</small>
            </button>
        </>
    }
    </section>
)};