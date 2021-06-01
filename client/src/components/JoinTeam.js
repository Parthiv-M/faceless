import { React, useState, useEffect } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import Loading from './Loader';
import { joinTeam, useFacelessDispatch, useFacelessState } from './../context';

const JoinTeam = () => {

    // handles state of textfield data
    const [teamCode, setTeamCode] = useState('');
    const [teamName, setTeamName] = useState('');
    const [loading, setLoading] = useState(true);   

    const history = useHistory();
    const user = useFacelessState();
    const dispatch = useFacelessDispatch();

    // handle blank field errors
    const handleBlankFields = () => {
        if(teamName === ''){
          document.getElementById('blank-teamname-error').classList.remove('d-none');
          document.getElementById('blank-teamname-error').classList.add('d-block');
          return false;
        }
        if(teamCode === ''){
          document.getElementById('blank-teamcode-error').classList.remove('d-none');
          document.getElementById('blank-teamcode-error').classList.add('d-block');
          return false;
        }
        if(teamName !== '' && teamCode !== '')
            return true;
    }

    // method to join a team
    const handleJoinTeam = async (e) => {
        e.preventDefault();      
        document.getElementById('null-team-error').classList.remove('d-block');
        document.getElementById('null-team-error').classList.add('d-none');
        try {
            if(handleBlankFields()){
                let payload = {
                    teamCode: teamCode
                }
                setTeamCode(payload);
                let response = await joinTeam(dispatch, payload)
                if(response.status === 401 || response.status === 500){
                    document.getElementById('null-team-error').classList.remove('d-none');
                    document.getElementById('null-team-error').classList.add('d-block');
                } else {
                    history.push('/dashboard');
                }
            }
        } catch (error) {
            history.push('/notFound');
        } 
    }

    useEffect(() => {
        if(user.teamName !== '') {
            history.goBack();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        loading 
        ?       
        <Loading />
        :
        <div className='container fixed-background m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>JOIN TEAM</div>
                </div>
                <div className="invalid-feedback float-left d-none" id='null-team-error' style={{ color:'#FEDF00' }}>
                    {teamName} is not a valid team
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="teamname" className="float-left text-white">Team Name</label>
                </div>
                <div className="w-full w-md-400">
                    <input type="text" name="teamname" autoComplete="off" className="form-control bg-transparent w-300 w-md-400 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { setTeamName(e.target.value) }}/>
                    <div className="invalid-feedback float-left d-none" id="blank-teamname-error" style={{ color:'#FEDF00' }}>
                        Team name cannot be blank
                    </div>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="teamcode" className="float-left text-white mt-20">Team Code</label>
                </div>
                <div className="d-flex flex-row justify-content-between w-full w-md-400">
                    <div>
                        <input type="text" name="teamcode" autoComplete="off" className="form-control bg-transparent w-300 w-md-400 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { setTeamCode(e.target.value) }}/>
                        <div className="invalid-feedback float-left d-none" id="blank-teamcode-error" style={{ color:'#FEDF00' }}>
                            Team code cannot be blank
                        </div>
                    </div>
                    <div>
                        <ChevronRight onClick={handleJoinTeam} className='animate-right' color="#FEDF00" style={{ height:'4rem', width:'4rem', cursor: 'pointer' }}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default JoinTeam;