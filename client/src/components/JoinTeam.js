import { React, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { joinTeam, useAuthDispatch } from './../context';

const JoinTeam = () => {

    // handles state of textfield data
    const [teamCode, setTeamCode] = useState('');   

    const history = useHistory();
    const dispatch = useAuthDispatch();

    const handleJoinTeam = async (e) => {
        e.preventDefault();      
        let payload = {
          teamCode: teamCode
        }
        setTeamCode(payload);
        try {
            joinTeam(dispatch, payload)
            .then((resp) => {
                console.log(resp);
                history.push('/dashboard');
            });
        } catch (error) {
          console.log(error);
        } 
      }

    return (
        <div className='container fixed-background m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>JOIN TEAM</div>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="teamname" className="float-left text-white">Team Name</label>
                </div>
                <div className="w-full w-md-400">
                    <input type="text" name="teamname" className="form-control bg-transparent w-300 w-md-400 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}}/>
                </div>
                <div className = 'w-full w-md-400'>
                    <label for="teamcode" className="float-left text-white mt-20">Team Code</label>
                </div>
                <div className="d-flex flex-row justify-content-between w-full w-md-400">
                    <div>
                        <input type="text" name="teamcode" className="form-control bg-transparent w-300 w-md-400 mt-5" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { setTeamCode(e.target.value) }}/>
                    </div>
                    <div>
                        <ChevronRight onClick={handleJoinTeam} color="#FEDF00" style={{ height:'4rem', width:'4rem' }}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default JoinTeam;