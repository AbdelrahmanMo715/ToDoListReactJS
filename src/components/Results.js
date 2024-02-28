import React from 'react'
import styles from './Results.module.css';
import { useAppContext } from '../context/AppContextProvider';
function Results() {
    const {tasks} = useAppContext();
    const TOTAL_TASKS = tasks.length;
    const COMPLETED_TASKS = tasks.filter((task) =>task.completed === true).length;
    const REMAINING_TASKS = TOTAL_TASKS - COMPLETED_TASKS;
  return (
    <div className={styles.results}>
        <p>All ({TOTAL_TASKS})</p>
        <p>Completed ({COMPLETED_TASKS})</p>
        <p>Remaining ({REMAINING_TASKS})</p>
    </div>
  )
}

export default Results
