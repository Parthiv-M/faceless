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

    // method to handle sign in
    const handleSignIn = async (e) => {
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

    return (
        <div className='container fixed-background m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="w-full w-md-400 py-20">
                    <div className="float-left font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>SIGN IN</div>
                </div>
                <form action="..." method="...">
                    <div className="form-group">
                        <div className = 'w-full w-md-400'>
                            <label for="username" className="required float-left font-size-18 text-white ">Email ID</label>
                        </div>
                        <div className="w-full w-md-400">
                            <input type="text" className="form-control bg-transparent w-300 w-md-400 mt-10 form-control" required="required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { data.email = e.target.value; }}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className = 'w-full w-md-400'>
                            <label for="password" className="required float-left font-size-18 text-white mt-20">Password</label>
                        </div>
                        <div className="d-flex flex-start w-full w-md-400">
                            <div>
                                <input type="password" className="form-control bg-transparent w-300 w-md-400 mt-10 form-control" required="required" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => { data.password = e.target.value; }}/>
                            </div>
                            <div>
                                <ChevronRight onClick={handleSignIn} className='animate-right' color="#FEDF00" style={{height:'5rem', width:'5rem', cursor: 'pointer'}}/>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;