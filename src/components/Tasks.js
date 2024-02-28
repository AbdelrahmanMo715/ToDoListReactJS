import React from 'react'
import styles from './Tasks.module.css';
import Task from './Task';
import { useAppContext } from '../context/AppContextProvider';
function Tasks() {
    const {tasks} = useAppContext();
  return (
    <ul className={styles.tasks}>
        {tasks?.map((task) => <Task task={task} key={task.title}/>)}
    </ul>
  )
}

export default Tasks
