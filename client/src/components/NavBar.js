import React from 'react';
import logo from './../assets/incognitoLogo.png';
import { useAuthState } from './../context';
import { Button } from 'reacthalfmoon';
import { logout, useAuthDispatch } from './../context';
import { useHistory } from 'react-router-dom';
import { LogOut, Menu, Play, Hash, Code } from 'react-feather';

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

    const toggleSideBar = () => {
        if(document.getElementById('sidebar').classList.contains('d-none')){
            document.getElementById('sidebar').classList.remove('d-none');
            document.getElementById('sidebar').classList.add('d-block');
        } else {
            document.getElementById('sidebar').classList.remove('d-block');
            document.getElementById('sidebar').classList.add('d-none');
        }
     }

    return (
            <nav className="navbar with-sidebar border-0 justify-content-between h-auto pt-3 pl-20 pb-3 font-weight-bold" style = {{backgroundColor:'#FEDF00'}}> 
                <div className="sidebar d-none" id="sidebar">
                  <div className="sidebar-menu">
                    <a href="/dashboard" className="text-center navbar-brand py-5 d-block">
                        <img src={logo} alt="Incognito Logo" style = {{ width:'150px', height:'50px' }}/>
                    </a>
                    <h5 class="sidebar-title text-center">FACELESS 2021</h5>
                    <div class="sidebar-divider"></div>
                    <a href="/scoreboard" class="sidebar-link sidebar-link-with-icon">
                      <span class="sidebar-icon">
                        <Hash size={18}/>
                      </span>
                      SCOREBOARD
                    </a>
                    <a href="/teamboard" class="sidebar-link sidebar-link-with-icon">
                      <span class="sidebar-icon">
                        <Code size={18}/>
                      </span>
                      TEAMBOARD
                    </a>
                    <a href="/game" class="sidebar-link sidebar-link-with-icon">
                      <span class="sidebar-icon">
                        <Play size={18}/>
                      </span>
                      PLAY
                    </a>
                    <br />
                  </div>
                </div>

                <div className="navbar-content d-flex flex-row">
                    <a href="/dashboard" className="navbar-brand py-5 d-block">
                        <img src={logo} alt="Incognito Logo" style = {{ width:'150px', height:'50px' }}/>
                    </a>
                    <a href="/scoreboard" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        SCOREBOARD
                    </a>
                    <a href="/teamboard" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        TEAMBOARD
                    </a>
                    <a href="/game" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        PLAY
                    </a>                    
                </div>
                <div className="navbar-content d-flex">
                    <div className="navbar-brand px-10 d-none d-md-block bg-transparent font-weight-bold">
                        {user.teamName}
                    </div>
                    <Button className="bg-transparent shadow-none border border-0 d-none d-md-block" onClick={handleLogout}>
                        <LogOut size={40}/>
                    </Button>
                    <div className='d-md-none d-block pr-15'>
                        <Menu onClick={toggleSideBar}/>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;