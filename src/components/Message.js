import styles from './Message.module.css';
function Message({msg}) {
  return (
    <div className={styles.msg}>
      <p>{msg}</p>
    </div>
  )
}

export default Message
