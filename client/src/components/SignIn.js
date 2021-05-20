import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, useAuthDispatch } from './../context';
import {Button} from 'reacthalfmoon';

const SignIn = () => {

    // handles state of textfields
    const [data, setData] = useState({
        email: '',
        password: '',
    });   

    const history = useHistory();
    const dispatch = useAuthDispatch();

    // handle blank field errors
    const handleBlankFields = () => {
        if(data.email === ''){
          document.getElementById('blank-email-error-signin').classList.remove('d-none');
          document.getElementById('blank-email-error-signin').classList.add('d-block');
          return false;
        }
        if(data.password === ''){
          document.getElementById('blank-password-error-signin').classList.remove('d-none');
          document.getElementById('blank-password-error-signin').classList.add('d-block');
          return false;
        }
        if(data.email !== '' && data.password !== '')
            return true;
      }

    // method to handle sign in
    const handleSignIn = async (e) => {
        if(handleBlankFields()){
            e.preventDefault();      
            let payload = {
              email: data.email,
              password: data.password 
            }
            setData(payload);
            try {
                let response = await signInUser(dispatch, payload);
                history.push('/dashboard');
            } catch (error) {
              console.log(error);
            }
        } 
      }

    return (
        <div className='container fixed-background m-auto'>
            <div className="d-flex justify-content-center align-items-center h-full w-full flex-column float-left p-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-md-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>WELCOME BACK</div>
                </div>
                <form className="w-md-400 w-350 mw-full">
                <div className='form-group'>
                    <label for="username" className="float-left text-white">Email ID</label>
                    <input type="text" className="form-control bg-transparent w-full" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { data.email = e.target.value; }}/>
                    <div className="invalid-feedback text-left d-none" id="blank-email-error-signin" style={{ color:'#FEDF00' }}>
                        Email cannot be blank
                    </div>
                </div>
                <div className='form-group'>
                    <label for="username" className="float-left text-white">Password</label>
                    <div className="d-flex flex-row justify-content-center w-full">
                        <input type="password" className="form-control w-full bg-transparent" style={{ borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00' }} onChange={(e) => { data.password = e.target.value; }}/>
                        {/* <span>
                            <ChevronRight onClick={handleSignIn} className='animate-right d-none d-md-flex' color="#FEDF00" style={{height:'4rem', width:'4rem', cursor: 'pointer'}}/>
                        </span> */}
                    </div> 
                    <Button onClick={handleSignIn} className="float-md-left btn btn-lg mt-20 w-150 h-auto animate-white" style={{ borderRadius:'2.5rem' }}>Sign in</Button>
                    <div className="invalid-feedback text-left d-none" id="blank-password-error-signin" style={{ color:'#FEDF00' }}>
                            Password cannot be blank
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;