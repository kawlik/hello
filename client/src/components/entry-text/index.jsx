import React from 'react';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function EntryText({ text }) {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-entry-text'>

        <h2 className='display-6' >{ text }</h2>

        <hr className='m-0' />

    </section>
)};