import React from 'react';
import logo from './../assets/incognitoLogo.png';
import { useAuthState } from './../context';

const Navbar = () => {

    const user = useAuthState();

    return (
            <nav className="navbar with-sidebar border-0 justify-content-between h-auto pt-3 pl-20 pb-3 font-weight-bold" style = {{backgroundColor:'#FEDF00'}}> 
                <div className="navbar-content d-flex">
                    <a href="/dashboard" className="navbar-brand py-5 d-block">
                        <img src={logo} alt="Incognito Logo" style = {{ width:'150px', height:'50px' }}/>
                    </a>
                    <a href="/scoreboard" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        SCOREBOARD
                    </a>
                    <a href="/game" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        PLAY
                    </a>
                </div>
                <div className="navbar-content d-flex bg-transparent border rounded">
                    <div className="navbar-brand px-10 d-none d-md-block">
                        {user.teamName}
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;