import './App.css';
import React, {useState} from "react";
import {nanoid} from "nanoid";
import Todo from './component/Todo'
import FilterButton from './component/FilterButton'
import TaskAddition from "./component/TaskAddition";

const BEFORE_TASK_DATA = [
    {id: "todo-0", name: "Eat", done: true},
    {id: "todo-1", name: "Read", done: false},
    {id: "todo-2", name: "Hack", done: true},
]

function App() {

    const [tasks, setTasks] = useState(BEFORE_TASK_DATA);
    const taskList = tasks.map(task => {
        return (<Todo
            id={task.id}
            name={task.name}
            done={task.done}
            editName={editTaskName}
        />);
    })

    function handleTaskSubmitEvent(name) {
        setTasks([...tasks,  {id: "todo-" + nanoid(), name: name, done: false}]);
    }

    function editTaskName(id, name) {
        const newTasks = tasks.map(task => {
            return task.id === id ? {...task, name: name} : task;
        });
        setTasks(newTasks);
    }

    return (
        <div className="todoapp stack-large">
            <h1>ecsimsw todo</h1>
            <TaskAddition submitHandler={handleTaskSubmitEvent}/>
            <div className="filters btn-group stack-exception">
                <FilterButton name="all" pressed={true}/>
                <FilterButton name="Active" pressed={false}/>
                <FilterButton name="Completed" pressed={false}/>
            </div>
            <h2 id="list-heading">
                {tasks.length} tasks remaining
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
