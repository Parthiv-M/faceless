import React from 'react'
import { ChevronRight } from 'react-feather';

const CreateTeam = () => {
    return (
        <div className='container fixedBackground m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>Create Team</div>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="username" className="float-left font-size-18 text-white ">Team Name</label>
                </div>
                <div className="w-full w-md-400">
                    <input type="text" className="form-control bg-transparent w-300 w-md-400 mt-10 " style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}}/>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="username" className="float-left font-size-18 text-white mt-20">Team Code</label>
                </div>
                <div className="d-flex flex-row justify-content-between w-full w-md-400">
                    <div>
                        <input type="text" className="form-control bg-transparent w-300 w-md-400 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}}/>
                    </div>
                    <a href="#">
                        <ChevronRight color="#FEDF00" style={{height:'5rem', width:'5rem'}}/>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default CreateTeam;
