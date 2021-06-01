import { React } from 'react';
import logo from './../assets/incognitoLogo.png';
import { Button } from 'reacthalfmoon';
import { logout, useFacelessDispatch, useFacelessState } from './../context';
import { useHistory } from 'react-router-dom';
import { X, Menu } from 'react-feather';

const Navbar = () => {

    const dispatch = useFacelessDispatch();
    const history = useHistory();

    const user = useFacelessState();

    // method to handle logout
    const handleLogout = async () => {
        try {
            await logout(dispatch);
            history.push('/home');
        } catch (error) {
            history.push('/notFound');
        }
    }

    // function to toggle the side bar on smaller screens
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
            <nav className="navbar with-sidebar w-full border-0 justify-content-between h-auto font-weight-bold" style = {{ backgroundColor:'#FEDF00' }}> 
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
                    <a href="/credits" className="navbar-link font-size-16 px-10 d-none d-md-block">
                        THE TEAM 
                    </a>                    
                </div>
                <div className="navbar-content d-flex">
                    <div className="navbar-brand px-10 d-none d-md-block bg-transparent font-weight-bold">
                        {user.teamName}
                    </div>
                    <Button className="text-dark bg-transparent shadow-none d-none d-md-block" style={{ borderRadius: 30, border: '2px solid black' }} onClick={handleLogout}>
                        LOGOUT
                    </Button>
                    <div className='d-md-none d-block pr-15'>
                        <Menu onClick={toggleSideBar}/>
                    </div>
                </div>
                <div className="sidebar d-none w-full z-10" id="sidebar" style={{ backgroundColor:'rgba(32,32,32,0.95)', height:'100vh' }}>
                  <div className="sidebar-menu d-flex flex-column align-items-center">
                      <div style={{position: 'fixed', top:'5rem', right: '4rem'}}><X color= 'white' onClick={toggleSideBar} size={40}/></div>
                    <h1 className="sidebar-title text-center mb-20 pb-20 font-weight-bolder" style={{ color:'#FEDF00', fontSize: '3rem', marginTop:'10rem' }}>{user.teamName}</h1>
                    <div className="sidebar-divider"></div>
                    <a href="/dashboard" className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      DASHBOARD
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/game" className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      PLAY
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/scoreboard" className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      SCOREBOARD
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <a href="/teamboard" className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      TEAMBOARD
                    </a>
                    <hr style={{background:'#FEDF00', height:'0.15rem', width:'250px'}}/>
                    <Button onClick={handleLogout} className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15">
                      LOG OUT
                    </Button>
                    <br />
                  </div>
                </div>
            </nav>
    )
}

export default Navbar;