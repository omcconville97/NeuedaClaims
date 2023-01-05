import { useState } from "react";
import DisplayTask from "./DisplayTask";
import "./Tasks.css";

const AddTask = () => {

    const [todoList, setTodoList] = useState([]);
    const [policyNumber, setPolicyNumber] = useState("");
    const [newNote, setNewNote] = useState("");
    
    const addTask = (event) => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskPolicyNo: policyNumber,
        taskNote: newNote,
        completed: false,
    }

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    event.preventDefault();

    setPolicyNumber("");
    setNewNote("");

    };


    const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });

    setTodoList(newTodoList);
    };

    const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id) {
          return {...task, completed: true};
        } else {
          return task; 
        }
        })
        )
    }


  return (
    <div>
        <div className="containerTask">
            <div className="taskFormat">
            <h2 className="formTitle">Add a task to the Todo List</h2>
              <form onSubmit={addTask}>

              <label htmlFor="policyNo">Policy Number:</label>
              <span>
                <input id="policyNo" name="policyNo" type="text" onChange={event => setPolicyNumber(event.target.value)} value={policyNumber} />
              </span>

              <label htmlFor="newNote">Description:</label>
              <textarea name="newNote" id="newNote" onChange={event => setNewNote(event.target.value)} value={newNote} ></textarea>

              <button type="submit">Submit Task</button>
              </form>
            </div>
        </div>
      <div>
        {todoList.map((task,index) => {
          return (
            <DisplayTask 
              key={index}
              taskPolicyNo={task.taskPolicyNo} 
              taskNote={task.taskNote}
              id={task.id} 
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
export default AddTask;