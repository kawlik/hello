import React from 'react';

//  icons
import SearchIcon from '@mui/icons-material/Search';

//  style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function AddFriend() {

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <section className='app-add-friend' >

        <form className='input-group' >

            <input type='text' className='form-control' placeholder='Enter user name or ID' />
            <span class='input-group-text' ><SearchIcon /></span>

        </form>

        <div className='result p-1' >


        </div>

    </section>  
)};