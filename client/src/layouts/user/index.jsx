import React from 'react';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local components
import UserView from '@/components/user-view';
import BtnApp from '@/components/btn-app';

//  icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function User() {
    
    //  parse user
    const { user } = useAuthContext();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <UserView user={ user } />

        <button id='app-add-user' className='app-btn-app btn btn-light' >
            <PersonAddIcon />
            <small className='text-muted d-block' >Add</small>
        </button>
    </>
)};