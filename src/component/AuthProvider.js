import React,{ useState,createContext } from 'react'
export const AuthContext=createContext()
export  function AuthProvider(props) {
  const[auth,SetAuth]=useState({affichage:true,newFilme:{title:'empty',rating:0,description:"you can add a new film",posterURL:"https:cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_1280.png"}});
  return (
    <AuthContext.Provider value={{auth,SetAuth}}>
         {props.children}
    </AuthContext.Provider> 

  );
} 