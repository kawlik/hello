import React from 'react';
import { useNavigate } from 'react-router-dom';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local services
import { routes } from '@/services/router.service';

//  local components
import UserView from '@/components/user-view';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

//  icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function User() {
    
    //  parse user
    const { user } = useAuthContext();

    //  navigate
    const navigate = useNavigate();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <UserView user={ user } toUserID={ () => navigate( routes.userUid ) } />

        <ul id='app-user-firends' >

        </ul>

        <aside id='app-add-user'>

            <button className='app-btn-app btn btn-light' onClick={ () => navigate( routes.userQrs ) } >
                <QrCodeScannerIcon />
            </button>

            <button className='app-btn-app btn btn-light' onClick={ () => navigate( routes.userAdd ) } >
                <PersonAddIcon />
            </button>

        </aside>
    </>
)};