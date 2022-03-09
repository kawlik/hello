import React from 'react';
import { useNavigate } from 'react-router-dom';

//  local config
import routerConfig from '../../configs/router.config';

//  icons
import AbcIcon from '@mui/icons-material/Abc';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function Apps() {
    
    //  navigate
    const navigate = useNavigate();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <h2>Apps</h2>

        <hr className='mt-0' />

        <section id='apps-container'>

            <button className='btn btn-light' onClick={ () => navigate( routerConfig.apps + routerConfig.appTest ) } >
                <AbcIcon />
                <small className='text-muted d-block' >Test App</small>
            </button>

        </section>
    </>
)};