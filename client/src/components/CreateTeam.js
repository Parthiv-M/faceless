import { React, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { createTeam, useAuthDispatch, useAuthState } from './../context';
import Loading from './Loader';

import './../App.css';

const CreateTeam = () => {

    // handles state of textfield data
    const [teamName, setTeamName] = useState('');   

    const history = useHistory();
    const dispatch = useAuthDispatch();

    const user = useAuthState();

    // method to create the team
    const handleCreateTeam = async (e) => {
        e.preventDefault();      
        let payload = {
          teamName: teamName
        }
        setTeamName(payload);
        try {
            createTeam(dispatch, payload)
            .then((resp) => {
                history.push('/dashboard');
            });
        } catch (error) {
          console.log(error);
        } 
      }

    return (
        user.loading 
        ? 
        <Loading />
        :
        <div className='container fixed-background m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20 pl-md-0">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>CREATE TEAM</div>
                </div>
                <div className='w-full w-md-400'>
                    <label for="teamname" className="float-left font-size-15 text-white ">Team Name</label>
                </div>
                <div className="d-flex flex-row justify-content-center w-full w-md-400">
                    <div>
                        <input type="text" name="teamname" className="form-control bg-transparent w-350 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { setTeamName(e.target.value) }}/>
                    </div>
                    <ChevronRight onClick={handleCreateTeam} className='animate-right' color="#FEDF00" style={{ height:'4rem', width:'4rem', cursor: 'pointer' }}/>
                </div> 
            </div>
        </div>
    )
}

export default CreateTeam;