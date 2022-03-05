import React from 'react';
import { useNavigate } from 'react-router-dom';

//  icons
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

//  local config
import routerConfig from '@/configs/router.config';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function BarBottom() {

    //  navigate
    const navigate = useNavigate();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-bar-bottom' >

        <button className='btn' onClick={ () => navigate( routerConfig.messages ) } >
            <MessageIcon />
            <small className='text-muted d-block' >Messages</small>
        </button>

        <button className='btn' onClick={ () => navigate( routerConfig.apps ) } >
            <AppsIcon />
            <small className='text-muted d-block' >Apps</small>
        </button>

        <button className='btn' onClick={ () => navigate( routerConfig.profile ) } >
            <PersonIcon />
            <small className='text-muted d-block' >Profile</small>
        </button>

    </section>
)};