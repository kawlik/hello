import React from 'react';
import { useNavigate } from 'react-router-dom';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function BtnApp({ name, path, icon }) {

    //  navigate
    const navigate = useNavigate();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <button className='app-btn-app btn btn-light' onClick={ () => navigate( path ) } >
        { icon }
        <small className='text-muted d-block' >{ name }</small>
    </button>
)};