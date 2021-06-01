
let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let team = localStorage.getItem("teamName")
  ? localStorage.getItem("teamName")
  : "";

let character = localStorage.getItem("character")
  ? localStorage.getItem("character")
  : '';

export const initialState = {
  token: token,
  teamName: team,
  character: character,
  story: null,
  questions: null,
  loading: false,
  errorMessage: null
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
    case "SET_QUESTIONS":
      return {
        ...initialState,
        questions: action.payload,
        loading: false,
      };
    case "SET_STORY":
      return {
        ...initialState,
        story: action.payload,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};