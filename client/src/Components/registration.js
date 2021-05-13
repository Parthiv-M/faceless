import React from 'react'

const Register = () => {
    return (
        <div className='container fixedBackground m-auto'>
            <div className="d-flex justify-content-center align-items-center h-full w-full flex-column float-left p-20">
                <div className="w-400 mw-full py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>Register</div>
                </div>
                <form className="w-400 mw-full">
                    <div className="form-group">
                        <label for="username" className="float-left font-size-18 text-white pb-10">UserName</label>
                        <input type="text" className="form-control bg-transparent" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <div className="form-group">
                        <label for="username" className="float-left font-size-18 text-white pb-10">Email Address</label>
                        <input type="text" className="form-control bg-transparent" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left font-size-18 text-white pb-10">Password</label>
                        <input type="password" className="form-control bg-transparent" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left font-size-18 text-white pb-10">Confirm Password</label>
                        <input type="password" className="form-control bg-transparent" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <div className="mt-20 mb-10 text-center font-weight-bolder font-size-24 text-light pt-20 pb-20">
                        <a href="#" className="btn btn-lg ml-0 mr-10 w-150 h-auto bg-transparent" style={{borderRadius:'2.5rem', border:'2px solid #FEDF00', color:'#FEDF00'}} role="button">Create Team</a>
                        <a href="#" className="btn btn-lg ml-10 mr-0 w-150 h-auto" style={{borderRadius:'2.5rem'}} role="button">Join Team</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
