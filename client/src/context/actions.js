import axios  from 'axios';

// action to sign up a user
export async function signUpUser(dispatch, signUpPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/user/signUp',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
        },
        data: JSON.stringify(signUpPayload),
      })
      .then((response) => {
        console.log('in .then')
        if (response.status === 200) {
            dispatch({ type: 'SIGNUP_SUCCESS', payload: response.headers['x-auth-token'] });
            localStorage.setItem('token', response.headers['x-auth-token']);
            resp = response;
        }
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_ERROR', error: error });
      });
      return resp;
  } catch (error) {
    dispatch({ type: 'SIGNUP_ERROR', error: error });
  }
}

// action to log a user into the game
export async function loginUser(dispatch, loginPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/user/signIn',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
        },
        data: JSON.stringify(loginPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
            localStorage.setItem('token', response.headers['x-auth-token']);
            resp = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'LOGIN_ERROR', error: error });
      });
      return resp;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}
 
// log a ser out by removing the token
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('token');
}

// action to create a team
export async function createTeam(dispatch, createTeamPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/user/createTeam',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
            'x-auth-token': localStorage.getItem('token')
        },
        data: JSON.stringify(createTeamPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            dispatch({ type: 'CREATE_TEAM_SUCCESS', payload: createTeamPayload.teamName });
            localStorage.setItem('teamName', createTeamPayload.teamName);
            resp = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'CREATE_TEAM_ERROR', error: error });
      });
      return resp;
  } catch (error) {
    dispatch({ type: 'CREATE_TEAM_ERROR', error: error });
  }
}

// action to join an existing team
export async function joinTeam(dispatch, joinTeamPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/user/joinTeam',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
            'x-auth-token': localStorage.getItem('token')
        },
        data: JSON.stringify(joinTeamPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            dispatch({ type: 'JOIN_TEAM_SUCCESS', payload: response.data.teamName });
            localStorage.setItem('teamName', response.data.teamName);
            resp = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'JOIN_TEAM_ERROR', error: error });
      });        
      return resp;
  } catch (error) {
    dispatch({ type: 'JOIN_TEAM_ERROR', error: error });
  }
}