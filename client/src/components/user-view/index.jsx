import React from 'react';

//  local assets
import imgAnonymous from '@/assets/anonymous.png';

//  icons
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function UserView({ user }) {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-user-view' >

        <img src={ user?.photoURL || imgAnonymous } alt={ user?.displayName || 'Anonymous' } className='user-photo' />

        <h2 className='lead' >{ user?.displayName || 'Anonymous' }</h2>

        <button className='btn btn-dark btn-id' >Get ID</button>

        <div className='bottom' >

            <button className='btn'>
                <ContactMailIcon />
            </button>

            <button className='btn' >
                <ContactPhoneIcon />
            </button>

        </div>

    </section>
)};