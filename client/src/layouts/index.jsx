import React from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//  local layouts
import Apps from '@/layouts/apps';
import Login from '@/layouts/login';
import News from '@/layouts/news';
import User from '@/layouts/user';

//  local apps
import TestApp from '@/layouts/apps/test-app';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local service
import { onTouchStart, onTouchMove, onTouchEnd } from '@/services/swipe.service';
import { routes } from '@/services/router.service';

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
        onTouchMove( event, '#app-main-content', [ routes.news, routes.apps, routes.user ], location, navigate );
    };

    function touchEnd( event ) {
        onTouchEnd( event, '#app-main-content' );
    };

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <main id='app-main-content' key={ location.pathname } onTouchStart={ touchStart } onTouchMove={ touchMove } onTouchEnd={ touchEnd } >
    <Routes>

        <Route exact path={ routes.login } element={ <Login /> } />

        {
            user && <>

                <Route exact path={ routes.news } element={ <News /> } />

                <Route exact path={ routes.user } element={ <User /> } />

                <Route exact path={ routes.apps } element={ <Apps /> } />

                    <Route exact path={ routes.appTest } element={ <TestApp /> } />

            </>
        }

        <Route path='*' element={ <Navigate replace to={ routes.login } /> } />

    </Routes>
    </main>
)};