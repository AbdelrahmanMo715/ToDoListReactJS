import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../customHooks/useLocalStorage';
const AppContext = createContext();
// const TASKS = [
//     {
//         id:Date.now(),
//         title : "Iam Task 1 klsandklmasldm lasmd mdalsmd",
//         completed : false
//     },
//     {
//         id:Date.now(),
//         title : "Iam Task 2",
//         completed : true
//     },
//     {
//         id:Date.now(),
//         title : "Iam Task 3",
//         completed : false
//     },
// ]
function AppContextProvider({children}) {
    const [isVisable,setIsVisable] = useState(false);
    const [tasks,SetTasks] = useLocalStorage([],"Tasks");
    const [title,setTitle] = useState("");
  return (
    <AppContext.Provider value={{isVisable,setIsVisable,tasks,SetTasks,title,setTitle}}>
    {children}
    </AppContext.Provider>
  )
}
function useAppContext(){
    const context = useContext(AppContext);
    return context;
}
export  {AppContextProvider,useAppContext}
