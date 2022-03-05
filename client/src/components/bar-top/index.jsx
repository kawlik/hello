import React from 'react';
import { useNavigate } from 'react-router-dom';

//  services
import { deleteUser } from '@/services/storage.service';

//  icons
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import LogoutIcon from '@mui/icons-material/Logout';

//  local config
import routerConfig from '@/configs/router.config';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function BarTop() {

    //   navigate
    const navigate = useNavigate();

    //  logout function
    const logout = () => {

        //  delete user
        deleteUser();

        //  redirect to loging page
        navigate( routerConfig.login );
    };

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-bar-top' >

        <button className='btn' onClick={ () => navigate( -1 ) }>
            <ArrowCircleLeftIcon />
            <small className='text-muted align-middle p-2' >Go back</small>
        </button>

        <button className='btn' onClick={ () => logout() }>
            <LogoutIcon />
        </button>

    </section>
)};