import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  location: {
    lng: -70.5856444039788,
    lat: -33.41615765,
    text: '',
  },
  verificationCode: {
    code: 0,
  },
};

const GlobalContext = createContext(initialState);
export const useValue = () => useContext(GlobalContext);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
