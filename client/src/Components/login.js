import React from 'react'
import { ChevronRight } from 'react-feather';

const Login = () => {
    return (
        <div className='container fixedBackground m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full px-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-sm-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>Sign In</div>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="username" className="float-left font-size-18 text-white ">Username / Email</label>
                </div>
                <div className="w-full w-md-400 ">
                    <input type="text" className="form-control bg-transparent w-md-400 mt-10 " style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="username" className="float-left font-size-18 text-white mt-20">Password</label>
                </div>
                <div className="d-flex flex-start w-full w-md-400">
                    <div className="w-full">
                        <input type="password" className="form-control bg-transparent w-md-400 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <a href="#" className="d-none d-sm-block">
                        <ChevronRight color="#FEDF00" style={{height:'5rem', width:'5rem'}}/>
                    </a>
                </div>
                <div className="mt-20 mb-10 text-center font-weight-bolder font-size-24 text-light pt-20 pb-20 d-block d-sm-none">
                    <a href="#" className="btn btn-lg ml-0 mr-10 w-150 h-auto bg-transparent" style={{borderRadius:'2.5rem', border:'2px solid #FEDF00', color:'#FEDF00'}} role="button">Login</a>
                </div> 
            </div>
        </div>
    )
}

export default Login;
