import React from 'react';
import logo from './../assets/incognitoLogo.png';
import { useAuthState } from './../context';
import { Button } from 'reacthalfmoon';
import { logout, useAuthDispatch } from './../context';
import { useHistory } from 'react-router-dom';
import { LogOut } from 'react-feather';

const Navbar = () => {

    const dispatch = useAuthDispatch();
    const user = useAuthState();
    const history = useHistory();

    // method to handle logout
    const handleLogout = async () => {
        try {
            await logout(dispatch);
            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    }

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
                    <a href="/teamboard" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        TEAMBOARD
                    </a>
                </div>
                <div className="navbar-content d-flex">
                    <div className="navbar-brand px-10 d-none d-md-block bg-transparent font-weight-bold">
                        {user.teamName}
                    </div>
                    <Button className="bg-transparent shadow-none border border-0 d-none d-md-block" onClick={handleLogout}>
                        <LogOut size={40}/>
                    </Button>
                </div>
            </nav>
    )
}

export default Navbar;