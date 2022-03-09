import React from 'react';

//  icons
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function PWAInstall({ installPWA, dismiss }) {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-pwa-install'>

        <button className='btn btn-dark shadow' onClick={ () => installPWA() } >
            <InstallMobileIcon />
            <small className='align-middle fw-bold p-2' >Install as PWA</small>
        </button>

        <button className='btn btn-secondary shadow' onClick={ () => dismiss() } >
            <AppBlockingIcon />
            <small className='align-middle fw-bold p-2' >Dismiss</small>
        </button>

    </section>
)};