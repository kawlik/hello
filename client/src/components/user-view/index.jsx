import React from 'react';

//  local assets
import imgAnonymous from '@/assets/anonymous.png';

//  icons
import QrCodeIcon from '@mui/icons-material/QrCode';
import ShareIcon from '@mui/icons-material/Share';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function UserView({ user, toUserID }) {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-user-view' >

        <img src={ user?.photoURL || imgAnonymous } alt={ user?.displayName || 'Anonymous' } className='user-photo' />

        <h2 className='lead mb-4' >{ user?.displayName || 'Anonymous' }</h2>

        <div className='info-block' >
            <button className='btn btn-dark btn-id' onClick={ () => toUserID() } >
                <QrCodeIcon />
                <small className='ms-2' >Get ID</small>
            </button>
        </div>

        <div className='info-block' >
            <button className='btn btn-dark btn-id' >
                <ShareIcon />
                <small className='ms-2' >Share</small>
            </button>
        </div>

    </section>
)};