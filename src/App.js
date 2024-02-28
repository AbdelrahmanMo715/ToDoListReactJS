import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import Button from './components/Button';
import Modal from './components/Modal';
import Message from './components/Message';
import { Fragment, useEffect, useState } from 'react';
import {useAppContext } from './context/AppContextProvider';
import Results from './components/Results';



function App() {
  const {isVisable,setIsVisable,tasks,setTitle} = useAppContext();

  // + keyboard btn to open the modal 
  useEffect(()=>{
    function callback(e){
      if(e.code === "NumpadAdd"){
        setIsVisable(!isVisable);
        setTitle("");
      }
    }
    document.addEventListener("keydown",callback)
  
    return ()=>{document.removeEventListener("keydown",callback)}
  },[isVisable,setIsVisable])
  
  return (
    <Fragment>
    <div className="App">
    <Results/>
      <h1>To Do List</h1>
      {tasks.length === 0 ? <Message msg={"No Tasks Click New Task Or (+) From Keyboard To Add One 🙂"}/> : <Tasks/>}
      <Button className={"newBtn"} onClick={()=>setIsVisable(!isVisable)} type={"new"}>+ New Task</Button>
    </div>
    {isVisable ? <Modal/> : null}
    </Fragment>
  );
}

export default App;
