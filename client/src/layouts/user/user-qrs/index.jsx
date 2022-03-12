import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function UserQrs() {

    //  state handler
    const [ result, setResult ] = useState( '' );

    //  handling function
    function onResult( result, error ) {

        //  test error
        if( error ) return console.error( error );

        //  test result
        if( result ) {

            //  set result
            setResult( result );
        }
    };

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <QrReader className='user-qr-reader' onResult={ onResult } constraints={{
            facingMode: 'environment',
            aspectRatio: 1,
        }} />

        <button className='btn btn-success btn-user-qr-reader' disabled={ result ? false : true } >Add friend</button>
    </>
)};