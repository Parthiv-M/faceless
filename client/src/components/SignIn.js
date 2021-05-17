import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, useAuthDispatch } from './../context';
import { ChevronRight } from 'react-feather';

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
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>SIGN IN</div>
                </div>
                <div className='d-flex flex-column w-full w-md-400'>
                    <label for="username" className="text-left text-white">Email ID</label>
                    <input type="text" className="form-control bg-transparent w-300 w-md-400 mt-10 " style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { data.email = e.target.value; }}/>
                    <div class="invalid-feedback text-left d-none" id="blank-email-error-signin" style={{ color:'#FEDF00' }}>
                        Email cannot be blank
                    </div>
                </div>
                <div className='d-flex flex-column w-full w-md-400'>
                    <label for="username" className="text-left font-size-18 text-white mt-20">Password</label>
                
                    <div className="d-flex flex-row flex-start w-full w-md-400">
                        <div>
                            <input type="password" className="form-control bg-transparent w-300 w-md-400 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { data.password = e.target.value; }}/>
                        </div>
                        <div>
                            <ChevronRight onClick={handleSignIn} className='animate-right' color="#FEDF00" style={{height:'5rem', width:'5rem', cursor: 'pointer'}}/>
                        </div>
                    </div> 
                    <div class="invalid-feedback text-left d-none" id="blank-password-error-signin" style={{ color:'#FEDF00' }}>
                            Password cannot be blank
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;