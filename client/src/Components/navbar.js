import React from 'react'
import incognitoLogo from './../incognitoLogoDark.png'

const Navbar = () => {
    return (
            <nav class="navbar with-sidebar border-0 justify-content-between h-auto pt-3 pl-20 pb-3 font-weight-bold" style = {{backgroundColor:'#FEDF00'}}> 
                <div class="navbar-content d-flex">
                    <a href="google.com" class="navbar-brand py-5 .d-block">
                        <img src={incognitoLogo} alt="Incognito Logo" style = {{width:'150px', height:'50px'}}/>
                    </a>
                    <a href="google.com" class="navbar-brand px-10 d-none d-md-block">
                        SCORE BOARD
                    </a>
                    <a href="google.com" class="navbar-brand px-10 d-none d-md-block">
                        PLAY
                    </a>
                </div>
                <div class="navbar-content d-flex">
                    <a href="google.com" class="navbar-brand px-10 d-none d-md-block">
                        REGISTER
                    </a>
                    <a href="google.com" class="navbar-brand px-10 d-none d-md-block">
                        LOGIN
                    </a>
                </div>
            </nav>
    )
}

export default Navbar