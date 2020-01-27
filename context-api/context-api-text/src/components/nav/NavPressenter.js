import React from 'react';
import {Link} from "react-router-dom"
function NavPressenter() {
 
    return (
        <nav>
            <Link to={{pathname:"/"}}>홈</Link>
            <Link to={{pathname:"/todoapp"}}>투두앱</Link>
        </nav>
    );
}

export default NavPressenter;