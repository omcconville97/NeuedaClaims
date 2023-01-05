import { FaCheck, FaTrash } from "react-icons/fa";
const DisplayTask = (props) => {

    return (
        <div 
          className="displayTaskContainer" style={{backgroundColor: props.completed ? "green" : "white"}}>
          <h3>{props.taskPolicyNo}</h3>
          <p>{props.taskNote}</p>
          <div className="sideby">
          <button className="completeBtn" onClick={() => props.completeTask(props.id)}><FaCheck /></button>
          <button onClick={() => props.deleteTask(props.id)}><FaTrash/></button>
          </div>
        </div>
      );

}
export default DisplayTask;