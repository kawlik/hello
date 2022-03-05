import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

//  local contexts
import AuthProvider from '@/contexts/auth.context';

//  local lomponents
import BarBottom from '@/components/bar-bottom';
import BarTop from '@/components/bar-top';
import Content from '@/layouts';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
    <Router>
    <AuthProvider>

        <BarTop />

        <Content />

        <BarBottom />

    </AuthProvider>
    </Router>
    </>
)};