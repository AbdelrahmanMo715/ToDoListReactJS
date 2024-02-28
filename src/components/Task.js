import React from 'react'
import Button from './Button'
import styles from "./Task.module.css";
import { useAppContext } from '../context/AppContextProvider';
function Task({task}) {
  
  const {SetTasks} = useAppContext();

  function handleDeleteTask(id){
    SetTasks((tasks) => tasks.filter((task) => task.id !== id))
    console.log(id);
}
function handleComplete(id){
  SetTasks((tasks) => tasks.map(task => (task.id === id ? { ...task, completed: true } : task)))

}
  return (
   <li className={`${task.completed === true ? "completed" : ""}`}>
   <span>{task.title}</span> 
   <div className={styles.wrapper}>
  {task.completed === true ? null : <Button onClick={()=>handleComplete(task.id)} type={"complete"}>&#10003;</Button>} 
   <Button onClick={()=> handleDeleteTask(task.id)} type={"delete"}>&#120;</Button>
   </div>
   </li>
  )
}

export default Task
