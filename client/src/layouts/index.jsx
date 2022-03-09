import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//  local layouts
import Apps from '@/layouts/apps';
import Login from '@/layouts/login';
import Messages from '@/layouts/messages';
import Profile from '@/layouts/profile';

//  local apps
import TestApp from '@/layouts/apps/test-app';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local service
import { onTouchStart, onTouchMove, onTouchEnd } from '@/services/swipe.service';

//  local config
import routerConfig from '@/configs/router.config';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function Content() {

    //  get user
    const { user } = useAuthContext();

    //  location and navigate
    const location = useLocation();
    const navigate = useNavigate();


    //  carry functions
    function touchStart( event ) {
        onTouchStart( event );
    };

    function touchMove( event ) {
        onTouchMove( event, '#app-main-content',  location.pathname.split( /\b\// )[0], [ routerConfig.messages, routerConfig.apps, routerConfig.profile ], navigate );
    };

    function touchEnd( event ) {
        onTouchEnd( event, '#app-main-content' );
    };

    
    //  allways check if user is set 
    useEffect(() => {

        //  redirect based by user status
        if( user ) {

            //  redirect to login
            navigate( routerConfig.apps );

        } else {

            //  redirect to login
            navigate( routerConfig.login );
        };
        
    }, [ user ]);
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <main id='app-main-content' key={ location.pathname } onTouchStart={ touchStart } onTouchMove={ touchMove } onTouchEnd={ touchEnd } >
    <Routes>

        <Route exact path={ routerConfig.login } element={ <Login /> } />


        <Route exact path={ routerConfig.messages } element={ <Messages /> } />

        <Route exact path={ routerConfig.apps } element={ <Apps /> } />

            <Route exact path={ routerConfig.apps + routerConfig.appTest } element={ <TestApp /> } />


        <Route exact path={ routerConfig.profile } element={ <Profile /> } />

        
        <Route path='*' element={ <Navigate replace to={ routerConfig.login } /> } />

    </Routes>
    </main>
)};