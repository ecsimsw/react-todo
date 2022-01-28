import React, {useState} from "react";
import './App.css';
import Todo from './components/Todo'
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks)

    const taskList = tasks.map(task => (
        <Todo
            id={task.id}
            name={task.name}
            done={task.completed}
            key={task.id}
        />
    ));

    function addTask(name) {
        const newTask = { id: "id", name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

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
                {taskList.length} tasks remaining
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
