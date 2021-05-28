import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUser, useFacelessDispatch, useFacelessState } from './../context';
import { Button } from 'reacthalfmoon';
import Loading from './Loader';

const SignUp = () => {

    // handles state of textfields
    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
        regNum: '',
        college: ''
    });   

    const [errorEmail, setErroremail] = useState('');
    const [finalPass, setFinalPass] = useState('');
    const [loading, setLoading] = useState(true);

    const user = useFacelessState();
    const history = useHistory();
    const dispatch = useFacelessDispatch();

    // check for confirm password
    const handleConfirmPassword = () => {
      if(data.password === finalPass) {
        document.getElementById('password-error').classList.remove('d-block');
        document.getElementById('password-error').classList.add('d-none');
        return true;
      } else {
        document.getElementById('password-error').classList.remove('d-none');
        document.getElementById('password-error').classList.add('d-block');
        return false;
      }
    }

    // method to handle password length
    const handlePasswordLength = () => {
      if(data.password.length < 6) { 
        document.getElementById('blank-password-error').classList.remove('d-block');
        document.getElementById('blank-password-error').classList.add('d-none');
        document.getElementById('password-length-error').classList.remove('d-none');
        document.getElementById('password-length-error').classList.add('d-block');
        return false;
      } else {
        document.getElementById('password-length-error').classList.remove('d-block');
        document.getElementById('password-length-error').classList.add('d-none');
        return true;
      }
    }

    // handle blank field errors
    const handleBlankFields = () => {
      if(data.userName === ''){
        document.getElementById('blank-username-error').classList.remove('d-none');
        document.getElementById('blank-username-error').classList.add('d-block');
        return false;
      }
      if(data.email === ''){
        document.getElementById('blank-email-error').classList.remove('d-none');
        document.getElementById('blank-email-error').classList.add('d-block');
        return false;
      }
      if(data.regNum === ''){
        document.getElementById('blank-regnum-error').classList.remove('d-none');
        document.getElementById('blank-regnum-error').classList.add('d-block');
        return false;
      }
      if(data.college === ''){
        document.getElementById('blank-college-error').classList.remove('d-none');
        document.getElementById('blank-college-error').classList.add('d-block');
        return false;
      }
      if(data.password === ''){
        document.getElementById('blank-password-error').classList.remove('d-none');
        document.getElementById('blank-password-error').classList.add('d-block');
        return false;
      }
      if(data.userName !== '' && data.email !== '' && data.password !== '' && data.regNum !== '')
        return true;
    }

    // removes existing error messages
    const removeExistingErrors = () => {
      document.getElementById('blank-username-error').classList.remove('d-block');
      document.getElementById('blank-username-error').classList.add('d-none');
      document.getElementById('blank-email-error').classList.remove('d-block');
      document.getElementById('blank-email-error').classList.add('d-none');
      document.getElementById('blank-regnum-error').classList.remove('d-block');
      document.getElementById('blank-regnum-error').classList.add('d-none');
      document.getElementById('blank-password-error').classList.remove('d-block');
      document.getElementById('blank-password-error').classList.add('d-none');
      document.getElementById('duplicate-regnum-error').classList.remove('d-block');
      document.getElementById('duplicate-regnum-error').classList.add('d-none');
      document.getElementById('duplicate-email-error').classList.remove('d-block');
      document.getElementById('duplicate-email-error').classList.add('d-none');
      document.getElementById('username-minlength-error').classList.remove('d-block');
      document.getElementById('username-minlength-error').classList.add('d-none');
      document.getElementById('username-maxlength-error').classList.remove('d-block');
      document.getElementById('username-maxlength-error').classList.add('d-none');
    }

    // method to handle sign up
    const handleSignUp = async (e) => {
        removeExistingErrors();
        if(handleBlankFields() && handlePasswordLength() && handleConfirmPassword()){
          e.preventDefault();      
          let payload = {
            userName: data.userName,
            email: data.email,
            password: data.password,
            regNum: data.regNum,
            college: data.college 
          }
          setData(payload);
          try {
            let response = await signUpUser(dispatch, payload);
            if(response.status === 200) {
              history.push('/createTeam');
            } else if(response.data.path !== undefined){
              if(response.data.path.errors.userName.kind === 'minlength') {
                document.getElementById('username-minlength-error').classList.remove('d-none');
                document.getElementById('username-minlength-error').classList.add('d-block');
                return;
              } else if(response.data.path.errors.userName.kind === 'maxlength') {
                document.getElementById('username-maxlength-error').classList.remove('d-none');
                document.getElementById('username-maxlength-error').classList.add('d-block');
                return;
              } else if(response.data.path.keyPattern.registrationNum === 1) {
                document.getElementById('duplicate-regnum-error').classList.remove('d-none');
                document.getElementById('duplicate-regnum-error').classList.add('d-block');
                return;
              } else if(response.data.path.keyPattern.email === 1) {
                document.getElementById('duplicate-email-error').classList.remove('d-none');
                document.getElementById('duplicate-email-error').classList.add('d-block');
                return;
              }
            } else if(response.data.errors[0].param === 'email'){
              setErroremail(response.data.errors[0].value);
              document.getElementById('invalid-email-error').classList.remove('d-none');
              document.getElementById('invalid-email-error').classList.add('d-block');
            } 
          } catch (error) {
            console.log(error)
            history.push('/notFound');
          }
        } 
      }
    
    // method to handle sign up and join team
    const handleSignUpAndJoin = async (e) => {
      if(handleBlankFields() && handlePasswordLength() && handleConfirmPassword()){
          e.preventDefault();      
          let payload = {
            userName: data.userName,
            email: data.email,
            password: data.password,
            regNum: data.regNum,
            college: data.college 
          }
          setData(payload);
          try {
            let response = await signUpUser(dispatch, payload)
            history.push('/joinTeam');
          } catch (error) {
            history.push('/notFound');
            console.log(error);
          } 
        }
      }
    
    useEffect(() => {
        if(user.token){
            history.goForward();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        loading 
        ? 
        <Loading />
        :
        <div>
          <div className='fixed-background position-fixed'></div>
            <div className="d-flex justify-content-center align-items-center h-full w-full flex-column p-20">
                <div className="w-400 mw-full py-20">
                    <div className="float-md-left text-center font-size-24 font-weight-bolder" style = {{ color:'#FEDF00' }}>SIGN UP</div>
                </div>
                <form className="w-md-400 w-350 mw-full">
                    <div className="form-group">
                        <label for="username" className="float-left text-white">Username</label>
                        <input type="text" className="form-control bg-transparent required" autoComplete="off" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.userName = e.target.value; }}/>
                        <div className="invalid-feedback text-left d-none" id="blank-username-error" style={{ color:'#FEDF00' }}>
                          Username cannot be blank
                        </div>
                        <div className="invalid-feedback text-left d-none" id="username-minlength-error" style={{ color:'#FEDF00' }}>
                          Username should contain minimum four characters
                        </div>
                        <div className="invalid-feedback text-left d-none" id="username-maxlength-error" style={{ color:'#FEDF00' }}>
                          Username can contain maximum ten characters
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="username" className="float-left text-white">Email ID</label>
                        <input type="text" className="form-control bg-transparent required" autoComplete="off" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.email = e.target.value; }}/>
                        <div className="invalid-feedback text-left d-none" id="blank-email-error" style={{ color:'#FEDF00' }}>
                          Email cannot be blank
                        </div>
                        <div className="invalid-feedback text-left d-none" id="duplicate-email-error" style={{ color:'#FEDF00' }}>
                          This email has already been used for Faceless
                        </div>
                        <div className="invalid-feedback text-left d-none" id="invalid-email-error" style={{ color:'#FEDF00' }}>
                          {errorEmail} is not a valid email
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="regnum" className="float-left text-white">Registration Number</label>
                        <input type="text" className="form-control bg-transparent required" autoComplete="off" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.regNum = e.target.value; }}/>
                        <div className="invalid-feedback text-left d-none" id="blank-regnum-error" style={{ color:'#FEDF00' }}>
                          Registration number cannot be blank
                        </div>
                        <div className="invalid-feedback text-left d-none" id="duplicate-regnum-error" style={{ color:'#FEDF00' }}>
                          This registration number is already registered on Faceless
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="college" className="float-left text-white">College Name</label>
                        <input className="form-control bg-transparent required" autoComplete="off" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.college = e.target.value; }}/>
                        <div className="invalid-feedback text-left d-none" id="blank-college-error" style={{ color:'#FEDF00' }}>
                          College name cannot be blank
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left text-white">Password</label>
                        <input type="password" className="form-control bg-transparent required" autoComplete="off" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00'}} onChange={(e) => { data.password = e.target.value; }}/>
                        <div className="invalid-feedback text-left d-none" id="password-length-error" style={{ color:'#FEDF00' }}>
                          Password should have at least 6 characters
                        </div>
                        <div className="invalid-feedback text-left d-none" id="blank-password-error" style={{ color:'#FEDF00' }}>
                          Password cannot be blank
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password" className="float-left text-white">Confirm Password</label>
                        <input type="password" className="form-control bg-transparent required" autoComplete="off" style={{ borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00' }} onChange={(e) => { setFinalPass(e.target.value); }}/>
                        <div className="invalid-feedback text-left d-none" id="password-error" style={{ color:'#FEDF00' }}>
                          Does not match with the password above
                        </div>
                    </div>
                    <div className="mt-md-20 mb-md-10 d-flex flex-md-row flex-column justify-content-center align-items-center text-center font-weight-bolder font-size-24 text-light pt-20 pb-20">
                        <Button onClick={handleSignUp} className="btn btn-lg mr-md-10 m-10 w-150 h-auto animate-white" style={{ borderRadius:'2.5rem' }}>Create Team</Button>
                        <Button onClick={handleSignUpAndJoin} className="btn btn-lg ml-md-10 m-10 w-150 h-auto animate-yellow" style={{ borderRadius:'2.5rem' }}>Join Team</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;