
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
        loading: false,
        errorMessage: action.error
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
          loading: false,
          errorMessage: action.error
        };
    case "JOIN_TEAM_SUCCESS":
        return {
          ...initialState,
          loading: false,
        };
    case "FETCH_LEVEL":
        return {
          ...initialState,
          loading: true,
        };
    case "FETCH_SCORE":
        return {
          ...initialState,
          loading: true,
        };
    case "LEVEL_SUCCESS":
        return {
          ...initialState,
          character: action.payload,
          loading: false,
        };
    case "SCORE_SUCCESS":
        return {
          ...initialState,
          score: action.payload.score,
          loading: false,
        };
    case "FETCH_SCORECARD":
        return {
          ...initialState,
          loading: true,
        };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};