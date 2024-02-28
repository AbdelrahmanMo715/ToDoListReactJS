import React, { useEffect, useRef, useState } from 'react'
import styles from './Modal.module.css';
import Button from './Button';
import { useAppContext } from '../context/AppContextProvider';
function Modal() {

const {isVisable,setIsVisable,SetTasks} = useAppContext();
const {title,setTitle} = useAppContext();
const inputEl = useRef(null);

function handleSubmit(e){
    e.preventDefault();
}

function handleAddTask(){
const newTask = {id:Date.now(),title,completed:false}
if (title == "") return;
SetTasks((tasks) => [...tasks , newTask]);
setIsVisable(false);
}

useEffect(()=>{
  function callback(e){
    if(e.code === "Enter"){
      handleAddTask();
    }
  }
  document.addEventListener("keydown",callback)

  return ()=>{document.removeEventListener("keydown",callback)}
},[title])

useEffect(()=>{
  inputEl.current.focus();
  setTitle("");
},[])

  return (
    <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
        <Button onClick={()=> setIsVisable(!isVisable)} type={"delete"}>&#120;</Button>
            <h3>Add Task</h3>
            <div>
            <label>
                Task : 
            </label>
            <input ref={inputEl} value={title} onChange={(e)=> setTitle(e.target.value)} type='text' placeholder='New Task'/>
            <Button onClick={handleAddTask} type={"add"}>Add</Button>
            </div>
        </form>
    </div>
  )
}

export default Modal
