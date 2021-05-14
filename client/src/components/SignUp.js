import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUser, useAuthState, useAuthDispatch } from './../context';
import {Button} from 'reacthalfmoon';

const SignUp = () => {

    // handles state of textfields
    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
    });   

    const history = useHistory();
    const dispatch = useAuthDispatch();
    const user = useAuthState();

    const handleSignUp = async (e) => {
        console.log(user);
        e.preventDefault();      
        let payload = {
          userName: data.userName,
          email: data.email,
          password: data.password 
        }
        setData(payload);
        try {
          let response = await signUpUser(dispatch, payload);
          history.push('/createTeam');
        } catch (error) {
          console.log(error);
        } 
      }
    
    const handleSignUpAndJoin = async (e) => {
        e.preventDefault();      
        let payload = {
          userName: data.userName,
          email: data.email,
          password: data.password 
        }
        setData(payload);
        try {
          signUpUser(dispatch, payload)
            .then((resp) => {
                history.push('/joinTeam');
            });
        } catch (error) {
          console.log(error);
        } 
      }

    return (
        <div className='container fixed-background m-auto'>
            <div className="d-flex justify-content-center align-items-center h-full w-full flex-column float-left p-20">
                <div className="w-400 mw-full py-20">
                    <div className="float-md-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>SIGN UP</div>
                </div>
                <form className="w-md-400 w-350 mw-full">
                    <div className="form-group">
                        <label for="username" className="float-left text-white">UserName</label>
                        <input type="text" className="form-control bg-transparent required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.userName = e.target.value; }}/>
                    </div>
                    <div className="form-group">
                        <label for="username" className="float-left text-white">Email ID</label>
                        <input type="text" className="form-control bg-transparent required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.email = e.target.value; }}/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left text-white">Password</label>
                        <input type="password" className="form-control bg-transparent required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.password = e.target.value; }}/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left text-white">Confirm Password</label>
                        <input type="password" className="form-control bg-transparent required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}}/>
                    </div>
                    <div className="mt-md-20 mb-md-10 d-flex flex-md-row flex-column justify-content-center align-items-center text-center font-weight-bolder font-size-24 text-light pt-20 pb-20">
                        <Button onClick={handleSignUp} className="btn btn-lg mr-md-10 m-10 w-150 h-auto bg-transparent" style={{ borderRadius:'2.5rem', border:'2px solid #FEDF00', color:'#FEDF00' }}>Create Team</Button>
                        <Button onClick={handleSignUpAndJoin} className="btn btn-lg ml-md-10 m-10 w-150 h-auto" style={{ borderRadius:'2.5rem' }}>Join Team</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;