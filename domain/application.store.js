import React from "react";
import reducers, { initialState } from "./reducers";

export const ApplicationContext = React.createContext(initialState);

export function ApplicationProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const value = { state, dispatch };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
