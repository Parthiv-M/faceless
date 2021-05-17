import React from 'react';
import logo from './../assets/incognitoLogo.png';
import { useAuthState } from './../context';
import { Button } from 'reacthalfmoon';
import { logout, useAuthDispatch } from './../context';
import { useHistory } from 'react-router-dom';
import { LogOut, Menu, XCircle, Play, Hash, Code, PlayCircle } from 'react-feather';

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
            <nav className="navbar with-sidebar border-0 justify-content-between h-auto pt-3 pl-20 pb-3 font-weight-bold z-0" style = {{backgroundColor:'#FEDF00'}}> 
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
                    <div className='d-md-none d-block pr-10'>
                        <Menu onClick={toggleSideBar} size = {40} />
                    </div>
                </div>
                <div className="sidebar d-none z-10" id="sidebar" style={{ backgroundColor:'rgba(32,32,32,0.95)', width:'100vw', height:'100vh'}}>
                  <div className="sidebar-menu d-flex flex-column align-items-center">
                      <div style={{position: 'fixed', top:'5rem', right: '4rem'}}><XCircle color= 'white' onClick={toggleSideBar} size={40}/></div>
                    <h1 class="sidebar-title text-center mb-20 pb-20 font-size-24 font-weight-bolder text-white" style={{marginTop:'10rem'}}>FACELESS 2021</h1>
                    <div class="sidebar-divider"></div>
                    <a href="/game" class="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      PLAY
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/scoreboard" class="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      SCOREBOARD
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/teamboard" class="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      TEAMBOARD
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/game" class="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      LOG OUT
                    </a>
                    <br />
                  </div>
                </div>
            </nav>
    )
}

export default Navbar;