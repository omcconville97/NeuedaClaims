import { useEffect, useReducer, useState } from "react";
import { addNewTask, deleteTaskAxios, getAllTasks } from "../../data/DataFunctions";
import DisplayTask from "./DisplayTask";
import "./Tasks.css";

const AddTask = () => {

  const [message, setMessage] = useState("");

  const initialNewTaskState = {taskPolicyNo : "", taskNote: "", completed: false}

     const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }
    const [newTask, dispatch] = useReducer(formReducer, initialNewTaskState);

    const handleChange = (event) => {
      dispatch({field : event.target.id, value : event.target.value});
   }

   const handleSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTask)
        .then( response => {
            if (response.status === 200) {
                setMessage("New Task added with id " + response.data.id);
            }
            else {
                setMessage("Something went wrong - status code was " + response.status);
            }
        } 
        )
        .catch( error => {
            setMessage("Something went wrong - " + error);
        })
} 

const [tableData, setTableData] = useState([])

const loadTaskData = () => {
  getAllTasks()
      .then(response => {
          setTableData(response.data);
          console.log("tasks", response);
      })
      .catch(error => {
          console.log("something went wrong", error);
      });
  };

  useEffect(() => loadTaskData(), []); //implement callback

  const completeTask = (id) => {
    setTableData(tableData.map((task) => {
        if(task.id === id) {
          return {...task, completed: true};
        } else {
          return task; 
        }})
      )
    }

    const deleteTask = (id) => {
    deleteTaskAxios(id)
      .then( response => {
        if (response.status === 200) {
            const newTaskList = tableData.filter((task) => {
              return task.id !== id;
            });
        
            setTableData(newTaskList);
        }
        else {
            setMessage("Something went wrong - status code was " + response.status);
        }
    } 
    )
    .catch( error => {
        setMessage("Something went wrong - " + error);
    })
  };


  return (
    <div>
        <div className="containerTask">
            <div className="taskFormat">
            <h2 className="formTitle">Add a task to the Todo List</h2>
              <form onSubmit={handleSubmit}>

              <label htmlFor="taskPolicyNo">Policy Number:</label>
              <span>
                <input id="taskPolicyNo" name="taskPolicyNo" type="text" onChange={handleChange} value={newTask.taskPolicyNo} />
              </span>

              <label htmlFor="taskNote">Description:</label>
              <textarea name="taskNote" id="taskNote" onChange={handleChange} value={newTask.taskNote} ></textarea>

              <button type="submit">Submit Task</button>
              <div>{message}</div> 
              </form>
            </div>
        </div>
      <div>
        {tableData.map((task,index) => (
            <DisplayTask key={index} id={task.id} taskPolicyNo={task.taskPolicyNo} 
            taskNote={task.taskNote} completed={task.completed}
            deleteTask={deleteTask} completeTask={completeTask}/>
        ))}
      </div>
    </div>
  );
}
export default AddTask;