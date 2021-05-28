import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, useFacelessDispatch, useFacelessState } from './../context';
import { Button } from 'reacthalfmoon';
import { getTeamDetails } from './../context';
import Loading from './Loader';

const SignIn = () => {

    // handles state of textfields
    const [data, setData] = useState({
        email: '',
        password: '',
    });   

    const history = useHistory();
    const user = useFacelessState();
    const [loading, setLoading] = useState(true);
    const dispatch = useFacelessDispatch();

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
        document.getElementById('invalid-password-error').classList.remove('d-block');
        document.getElementById('invalid-password-error').classList.add('d-none');
        if(handleBlankFields()){
            e.preventDefault();      
            let payload = {
              email: data.email,
              password: data.password 
            }
            setData(payload);
            try {
                let response = await signInUser(dispatch, payload);
                console.log(response);
                if(response.message === 'Login successful') {
                    await getTeamDetails(dispatch);
                    history.push('/dashboard');
                }
                else if(response.data.errors[0].msg === 'Invalid Password') {
                    document.getElementById('invalid-password-error').classList.remove('d-none');
                    document.getElementById('invalid-password-error').classList.add('d-block');
                } 
            } catch (error) {
                console.log(error);
                history.push('/notFound');
            }
        } 
    }
    
    useEffect(() => {
        if(user.token){
            history.push('/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    return (
        loading 
        ? 
        <Loading />
        :
        <div className='d-flex flex-row align-items-center' style={{ height: '100vh' }}>
            <div className='fixed-background position-fixed'></div>
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
                    </div> 
                    <div className="invalid-feedback text-left d-none" id="blank-password-error-signin" style={{ color:'#FEDF00' }}>
                        Password cannot be blank
                    </div>
                    <div className="invalid-feedback text-left d-none" id="invalid-password-error" style={{ color:'#FEDF00' }}>
                        Invalid password
                    </div>
                </div>
                <Button onClick={handleSignIn} className="float-md-left btn btn-lg mt-20 w-150 h-auto animate-white" style={{ borderRadius:'2.5rem' }}>Sign in</Button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;