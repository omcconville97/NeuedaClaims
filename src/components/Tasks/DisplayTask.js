const DisplayTask = (props) => {

    return (
        <div 
          className="displayTaskContainer"
          style={{backgroundColor: props.completed ? "green" : "white"}}>
          <h2>{props.taskName}</h2>
          <button className="completeBtn" onClick={() => props.completeTask(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
      );

}
export default DisplayTask;