import React from 'react';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function User() {
    
    //  parse user
    const { user } = useAuthContext();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>

    </>
)};