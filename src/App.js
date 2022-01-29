import React, {useState} from "react";
import {nanoid} from "nanoid";

import './App.css';
import Todo from './components/Todo'
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks)

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            console.log("completed");
            if (id === task.id) {
                console.log(task);
                return {...task, completed: !task.completed,}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function editTask(id, newName) {
        const editedTasks = tasks.map(task => {
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task
        });
        setTasks(editedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    const taskList = tasks.map(task => {
        console.log(task);
        return (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        )
    });

    function addTask(name) {
        const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
        setTasks([...tasks, newTask]);
    }

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form task={addTask}/>
            <div className="filters btn-group stack-exception">
                <FilterButton title="All" pressed="true"/>
                <FilterButton title="Acting" pressed="false"/>
                <FilterButton title="Temp" pressed="false"/>
            </div>
            <h2 id="list-heading">
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
}

export default App;
