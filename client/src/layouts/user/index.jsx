import React from 'react';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local service
import { names } from '@/services/router.service';

//  local components
import EntryText from '@/components/entry-text';

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
        <EntryText text={ `Hello ${ user?.displayName || 'Anonymous' }!` } />
    </>
)};