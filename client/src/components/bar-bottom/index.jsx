import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local config
import { names, routes, matchRoute } from '@/services/router.service';

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
                <button className={ `btn ${ matchRoute( location, routes.news ) ? 'active' : '' }` } onClick={ () => navigate( routes.news ) } >
                    <MessageIcon />
                    <small className='text-muted d-block' >{ names.news }</small>
                </button>

                <button className={ `btn ${ matchRoute( location, routes.apps ) ? 'active' : '' }` } onClick={ () => navigate( routes.apps ) } >
                    <AppsIcon />
                    <small className='text-muted d-block' >{ names.apps }</small>
                </button>

                <button className={ `btn ${ matchRoute( location, routes.user ) ? 'active' : '' }` } onClick={ () => navigate( routes.user ) } >
                    <PersonIcon />
                    <small className='text-muted d-block' >{ names.user }</small>
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