import React from 'react';

//  local service
import { names } from '@/services/router.service';

//  local components
import EntryText from '@/components/entry-text';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function News() {
    
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <EntryText text={ names.news } />
    </>
)};