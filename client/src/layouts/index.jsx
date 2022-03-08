import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//  local layouts
import Login from '@/layouts/login';

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
        onTouchMove( event, '#app-main-content', location.pathname, [ routerConfig.messages, routerConfig.apps, routerConfig.profile ], navigate );
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


        <Route exact path={ routerConfig.messages } element={ <h2>Messages</h2> } />

        <Route exact path={ routerConfig.apps } element={ <h2>Apps</h2> } />

        <Route exact path={ routerConfig.profile } element={ <h2>Profile</h2> } />

        
        <Route path='*' element={ <Navigate replace to={ routerConfig.login } /> } />

    </Routes>
    </main>
)};