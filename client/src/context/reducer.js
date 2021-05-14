
let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let team = localStorage.getItem("teamName")
  ? localStorage.getItem("teamName")
  : "";
 
export const initialState = {
  token: token,
  teamName: team,
  level: '',
  score: '',
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
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
    case "CREATE_TEAM":
      return {
        ...initialState,
        loading: false
      };
    case "JOIN_TEAM":
      return {
        ...initialState,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
    case "SIGNUP_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
    case "CREATE_TEAM_ERROR":
      return {
        ...initialState,
        loading: false
      };
    case "CREATE_TEAM_SUCCESS":
      return {
        ...initialState,
        teamName: action.payload,
        loading: false
      };
    case "JOIN_TEAM_ERROR":
        return {
          ...initialState,
          loading: false
        };
    case "JOIN_TEAM_SUCCESS":
        return {
          ...initialState,
          loading: false
        };
      
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};