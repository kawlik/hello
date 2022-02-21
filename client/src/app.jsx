import React from 'react';

//  local contexts
import AuthProvider from '@/contexts/auth.context';

//  local components
import Login from '@/components/login';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
    <AuthProvider>

        <Login />

    </AuthProvider>
    </>
)};