import React from 'react';

//  local context
import { useAuthContext } from '@/contexts/auth.context';

//  local service
import { names } from '@/services/router.service';

//  local components
import EntryText from '@/components/entry-text';

//  component style
import './index.scss';



/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function TestApp() {
    
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <EntryText text={ names.TestApp } />
    </>
)};