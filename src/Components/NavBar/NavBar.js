import React from 'react';
import CartIcon from '../CartIcon';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount';


function NavBar() {
    return(
        <nav class="navbar navbar-expand-sm bg-light">
            <ul >
                <li >
                    <Link to={`/`}>Home</Link>
                    
                </li>
                <li>
                    <Link to={`/Cart`}><CartIcon /></Link>
                    
                </li>
                <li>
                    <Link to={`/ItemCount`}><ItemCount /></Link>
                    
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;



