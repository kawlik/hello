import React from 'react';
import QRCode from 'react-qr-code';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function UserUid() {

    //  parse user
    const { user } = useAuthContext();
    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <QRCode value={ user?.uid || '' } className='user-qr-code' />
        
        <button className='btn btn-dark btn-user-qr-code'>{ user?.uid || '' }</button>
    </>
)};