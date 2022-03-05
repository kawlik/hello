import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

//  local service
import { getInstallPrompt } from './services/pwa.service';

//  local contexts
import AuthProvider from '@/contexts/auth.context';

//  local lomponents
import BarBottom from '@/components/bar-bottom';
import BarTop from '@/components/bar-top';
import Content from '@/layouts';
import PWAInstall from '@/components/pwa-install';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    //  PWA state
    const [ installPrompt, setInstallPrompt ] = useState( false );


    //  PWA utility functions
    async function installPWA() {

        //  get prompt
        const installPWAPrompt = await getInstallPrompt();

        //  prompt PWA install
        installPWAPrompt.prompt();

        //  await for outcome
        const { outcome } = await installPWAPrompt.userChoice;

        //  test outcome
        if( outcome === 'accepted' ) {
            
            //  dismis when accepted
            dismiss();
        }
    };

    //  dismiss PWA install
    function dismiss() {

        //  ustet PWA prompt
        setInstallPrompt( false );
    };


    //  manage PWA
    useEffect( async () => {

        //  initial load
        await getInstallPrompt();

        //  await for install prompt
        setInstallPrompt( true );

    }, []);

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
    <Router>
    <AuthProvider>

        <BarTop />

        { installPrompt && <PWAInstall installPWA={ installPWA } dismiss={ dismiss } /> }

        <Content />

        <BarBottom />

    </AuthProvider>
    </Router>
    </>
)};