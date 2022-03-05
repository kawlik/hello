import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

//  local config
import routerConfig from '@/configs/router.config';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    //  get location
    const location = useLocation();
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <main className='app-main-content' key={ location.pathname } >
    <Routes>

        <Route exact path={ routerConfig.login } element={ <h2>Login</h2> } />

        <Route exact path={ routerConfig.profile } element={ <h2>Profile</h2> } />

        <Route exact path={ routerConfig.messages } element={ <h2>Messages</h2> } />

        <Route exact path={ routerConfig.apps } element={ <h2>Apps</h2> } />
        
        <Route path='*' element={ <Navigate replace to={ routerConfig.login } /> } />

    </Routes>
    </main>
)};