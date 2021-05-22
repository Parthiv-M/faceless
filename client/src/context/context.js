import React, { useReducer } from "react";
import { AuthReducer, initialState } from './reducer'; 

const FacelessStateContext = React.createContext();
const FacelessDispatchContext = React.createContext();

export function useFacelessState() {
  const context = React.useContext(FacelessStateContext);
  if (context === undefined) {
    throw new Error("useFacelessState must be used within a FacelessProvider");
  }
 
  return context;
}
 
export function useFacelessDispatch() {
  const context = React.useContext(FacelessDispatchContext);
  if (context === undefined) {
    throw new Error("useFacelessDispatch must be used within a FacelessProvider");
  }
 
  return context;
}

export const FacelessProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <FacelessStateContext.Provider value={user}>
      <FacelessDispatchContext.Provider value={dispatch}>
        {children}
      </FacelessDispatchContext.Provider>
    </FacelessStateContext.Provider>
  );
};