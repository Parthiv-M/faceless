import { React, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { createTeam, useFacelessDispatch, useFacelessState } from './../context';
import Loading from './Loader';
import { Button } from 'reacthalfmoon';

import './../App.css';

const CreateTeam = () => {

    // handles state of textfield data
    const [teamName, setTeamName] = useState('');   

    const history = useHistory();
    const dispatch = useFacelessDispatch();

    const user = useFacelessState();

    // handle blank field errors
    const handleBlankFields = () => {
        if(teamName === ''){
          document.getElementById('blank-teamname-error').classList.remove('d-none');
          document.getElementById('blank-teamname-error').classList.add('d-block');
          return false;
        }
        if(teamName !== '')
          return true;
    }

    // removes the existing error messages
    const removeExistingErrors = () => {
        document.getElementById('blank-teamname-error').classList.remove('d-block');
        document.getElementById('blank-teamname-error').classList.add('d-none');
        document.getElementById('teamname-minlength-error').classList.remove('d-block');
        document.getElementById('teamname-minlength-error').classList.add('d-none');
        document.getElementById('teamname-maxlength-error').classList.remove('d-block');
        document.getElementById('teamname-maxlength-error').classList.add('d-none');
        document.getElementById('duplicate-teamname-error').classList.remove('d-block');
        document.getElementById('duplicate-teamname-error').classList.add('d-none');
    } 

    // method to create the team
    const handleCreateTeam = async (e) => {
        e.preventDefault();      
        removeExistingErrors();
        if(handleBlankFields()) {
            let payload = {
                teamName: teamName
            }
            setTeamName(payload);
            try {
                let response = await createTeam(dispatch, payload);
                if(response.status === 200) {
                    history.push('/dashboard');
                } else if(response.data.error !== undefined){
                    if(Boolean(response.data.error.errors)){
                        if(response.data.error.errors.teamName.kind === 'minlength') {
                            document.getElementById('teamname-minlength-error').classList.remove('d-none');
                            document.getElementById('teamname-minlength-error').classList.add('d-block');
                            return;
                        } else if(response.data.error.errors.teamName.kind === 'maxlength') {
                            document.getElementById('teamname-maxlength-error').classList.remove('d-none');
                            document.getElementById('teamname-maxlength-error').classList.add('d-block');
                            return;
                        }
                    } else if(Boolean(response.data.error)) {
                        if(response.data.error.keyPattern.teamName === 1) {
                            document.getElementById('duplicate-teamname-error').classList.remove('d-none');
                            document.getElementById('duplicate-teamname-error').classList.add('d-block');
                            return;
                        }
                    }
                } 
            } catch (error) {
                console.log(error)
                history.push('/notFound');
            }
        } 
    }

    return (
        user.loading 
        ? 
        <Loading />
        :
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='fixed-background position-fixed'></div>
            <div className="d-flex flex-column justify-content-center align-items-center h-full w-full pl-20 pl-md-0">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>CREATE TEAM</div>
                </div>
                <div className='w-full w-md-400'>
                    <label for="teamname" className="float-left font-size-15 text-white ">Team Name</label>
                </div>
                <div className="d-flex flex-row justify-content-left justify-content-md-center w-full w-md-400">
                    <div>
                        <input type="text" name="teamname" autoComplete='off' className="form-control bg-transparent w-350 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00' }} onChange={(e) => { setTeamName(e.target.value) }}/>
                        <div className="invalid-feedback text-left d-none" id='blank-teamname-error' style={{ color:'#FEDF00' }}>
                            Team name cannot be blank
                        </div>
                        <div className="invalid-feedback text-left d-none" id='duplicate-teamname-error' style={{ color:'#FEDF00' }}>
                            Team name already exists
                        </div>
                        <div className="invalid-feedback text-left d-none" id='teamname-minlength-error' style={{ color:'#FEDF00' }}>
                            Team name should have at least four characters
                        </div>
                        <div className="invalid-feedback text-left d-none" id='teamname-maxlength-error' style={{ color:'#FEDF00' }}>
                            Team name can have at most ten characters
                        </div>
                    </div>
                    <ChevronRight onClick={handleCreateTeam} className='animate-right d-md-block d-none' color="#FEDF00" style={{ height:'4rem', width:'4rem', cursor: 'pointer' }}/>
                </div> 
                <Button onClick={handleCreateTeam} className="btn align-self-start d-md-none d-block btn-lg mt-20 w-100 h-auto animate-white" style={{ borderRadius:'2.5rem' }}>Create</Button>
            </div>
        </div>
    )
}

export default CreateTeam;