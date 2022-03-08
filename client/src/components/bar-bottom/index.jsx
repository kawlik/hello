import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local config
import routerConfig from '@/configs/router.config';

//  icons
import AppsIcon from '@mui/icons-material/Apps';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function BarBottom() {

    //  get user
    const { user } = useAuthContext();

    //  navigate
    const location = useLocation();
    const navigate = useNavigate();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-bar-bottom' key={ user } >
    {
        user
        ?   <>
                <button className={ `btn ${ location.pathname.match( routerConfig.messages ) ? 'active' : '' }` } onClick={ () => navigate( routerConfig.messages ) } >
                    <MessageIcon />
                    <small className='text-muted d-block' >Messages</small>
                </button>

                <button className={ `btn ${ location.pathname.match( routerConfig.apps ) ? 'active' : '' }` } onClick={ () => navigate( routerConfig.apps ) } >
                    <AppsIcon />
                    <small className='text-muted d-block' >Apps</small>
                </button>

                <button className={ `btn ${ location.pathname.match( routerConfig.profile ) ? 'active' : '' }` } onClick={ () => navigate( routerConfig.profile ) } >
                    <PersonIcon />
                    <small className='text-muted d-block' >Profile</small>
                </button>
            </>
        :   <>
                <button className='btn' onClick={ () => { } } >
                    <LocalPoliceIcon />
                    <small className='text-muted d-block' >Our policy</small>
                </button>
            </>
    }
    </section>
)};