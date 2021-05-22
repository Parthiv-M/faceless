
let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let team = localStorage.getItem("teamName")
  ? localStorage.getItem("teamName")
  : "";

let character = localStorage.getItem("character")
  ? localStorage.getItem("character")
  : '';

let score = localStorage.getItem("score")
  ? localStorage.getItem("score")
  : '0';
 
export const initialState = {
  token: token,
  teamName: team,
  character: character,
  score: score,
  loading: false,
  errorMessage: null,
  hintTaken: false
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        token: action.payload,
        loading: false
      };
    case "SIGNUP_SUCCESS":
      return {
        ...initialState,
        token: action.payload,
        loading: false
      };
    case "AUTH_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
    case "LOGOUT":
      return {
        token: '',
        teamName: '',
        character: '',
        score: '',
        loading: false,
        errorMessage: null,
        hintTaken: false
      };
    case "SET_TEAM":
      return {
        ...initialState,
        teamName: action.payload,
        loading: false
      };
    case "SET_CHARACTER":
        return {
          ...initialState,
          character: action.payload,
          loading: false,
        };
    case "HINT_TAKEN":
      return {
        ...initialState,
        hintTaken: true
      };
    case "RESET_HINT":
      return {
        ...initialState,
        hintTaken: false
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};