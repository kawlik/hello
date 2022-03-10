import React from 'react';

//  local service
import { routes, names } from '@/services/router.service';

//  local components
import EntryText from '@/components/entry-text';
import BtnApp from '@/components/btn-app';

//  icons
import AbcIcon from '@mui/icons-material/Abc';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function Apps() {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <EntryText text={ names.apps } />

        <section id='apps-container' >

            <BtnApp name={ names.appTest } path={ routes.appTest } icon={ <AbcIcon /> } />

        </section>
    </>
)};