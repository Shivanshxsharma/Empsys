import React, { createContext,useEffect,useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {





const[userData, setuserData] = useState(null);
useEffect(() => {
  const {emp, ad} =getLocalStorage();
  setuserData({emp,ad});

 
}, [])





  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

