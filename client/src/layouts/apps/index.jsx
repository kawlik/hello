import React from 'react';
import { useNavigate } from 'react-router-dom';

//  local service
import { routes } from '@/services/router.service';

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

            <button className='btn btn-light' onClick={ () => navigate( routes.appTest ) } >
                <AbcIcon />
                <small className='text-muted d-block' >Test App</small>
            </button>

        </section>
    </>
)};