import { useContext, createContext, useState } from 'react';
import { json } from 'react-router-dom';
 const createCon = createContext();

 
 
 const ContextProvider = ({children}) => {
  let [isSidebarOpen , setisSidebarOpen] = useState(false);
  let [darkCol , setdarkCol] = useState(false);
  let [islogin , setislogin] = useState(
    JSON.parse(localStorage.getItem("islogin") || null)
  );
  return(
     <createCon.Provider value={{
      isSidebarOpen ,
      setisSidebarOpen,
      darkCol,
      setdarkCol,
      islogin,
      setislogin
     }}>
    {children}
  </createCon.Provider>
  )
}

let useCustomhook = ()=>{
    return useContext(createCon)
}
export default ContextProvider;
export {useCustomhook}