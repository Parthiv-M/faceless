import axios  from 'axios';

// action to sign up a user
export async function signUpUser(dispatch, signUpPayload) {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
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
    dispatch({ type: 'AUTH_REQUEST' });
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

// action to fetch the scorecard
export async function getScorecard(dispatch) {
  try {
    let resp = {}
    await axios({
        method: 'GET',
        url: '/api/game/getScorecard',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
            'x-auth-token': localStorage.getItem('token')
        },
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });        
      return resp;
  } catch (error) {
    console.log(error);
  }
}

// action to fetch the current character of the team from the database
export async function getCharacterForTeam(dispatch, payload) {
  try {
    let resp = {};
    await axios({
      method: 'GET',
      url: '/api/game/getCharacter',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", 
          'x-auth-token': localStorage.getItem('token')
      },
    })
    .then((response) => {
      if (response.status === 200) {
          resp = response.data;
          localStorage.setItem('character', response.data.character);
          dispatch({ type: 'LEVEL_SUCCESS', payload: response.data.character });
      }
    })
    .catch((error) => {
      console.log(error);
    });        
    return resp;
  } catch (error) {
    console.log(error);
  }
}

// action to fetch questions of the current character from the database
export async function getQuestionsForTeam(dispatch, payload) {
  try {
    let resp = {};
    await axios({
      method: 'GET',
      url: `/api/game/getQuestion/${payload.name}`,
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", 
          'x-auth-token': localStorage.getItem('token')
      },
    })
    .then((response) => {
      if (response.status === 200) {
          resp = response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });        
    return resp;
  } catch (error) {
    console.log(error);
  }
}

// action to fetch team details from the database
export async function getTeamDetails(dispatch) {
  try {
    let resp = {};
    await axios({
      method: 'GET',
      url: '/api/team/getTeam/',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", 
          'x-auth-token': localStorage.getItem('token')
      },
    })
    .then((response) => {
      if (response.status === 200) {
          resp = response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });        
    return resp;
  } catch (error) {
    console.log(error);
  }
}

// action to fetch storyline of a character from the database
export async function getStoryline(payload) {
  try {
    let resp = {};
    await axios({
      method: 'GET',
      url: `/api/game/getStoryline/${payload.character}`,
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", 
          'x-auth-token': localStorage.getItem('token')
      },
    })
    .then((response) => {
      if (response.status === 200) {
          resp = response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });        
    return resp;
  } catch (error) {
    console.log(error);
  }
}

// action to submit answers
export async function submitAnswers(payload) {
  try {
    let resp = {};
    let body = {
      answer: payload.answers
    }
    console.log('making request')
    await axios({
      method: 'POST',
      url: `/api/game/submitAnswer/${payload.character}`,
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*", 
          'x-auth-token': localStorage.getItem('token')
      },
      data: JSON.stringify(body),
    })
    .then((response) => {
      if (response.status === 200) {
          resp = response.data;
          if(resp.code === 1)
            localStorage.setItem('character', resp.character);
      }
    })
    .catch((error) => {
      console.log(error);
    });        
    return resp;
  } catch (error) {
    console.log(error);
  }
}


