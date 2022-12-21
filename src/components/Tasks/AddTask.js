import { useState } from "react";
import DisplayTask from "./DisplayTask";
import "./Tasks.css";

const AddTask = () => {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const handleChange = (event) => {
    setNewTask(event.target.value);
    };

    const addTask = () => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
    }

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);

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

            <p>Please use the box below:</p>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
            </div>
        </div>
      <div>
        {todoList.map((task,index) => {
          return (
            <DisplayTask 
              key={index}
              taskName={task.taskName} 
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