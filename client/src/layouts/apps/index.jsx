import React from 'react';

//  local service
import { routes, names } from '@/services/router.service';

//  local components
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
        <section id='apps-container' >

            <BtnApp name={ names.appTest } path={ routes.appTest } icon={ <AbcIcon /> } />

        </section>
    </>
)};