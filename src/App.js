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

const filters = [
    {id : nanoid(), name: "All", checkReveal: () => true},
    {id : nanoid(), name: "Active", checkReveal: task => !task.done},
    {id : nanoid(), name: "Completed", checkReveal: task => task.done}
];

function App() {

    const [tasks, setTasks] = useState(BEFORE_TASK_DATA);
    const [activatedFilter, setActivatedFilter] = useState(filters[0]);

    function handleTaskSubmitEvent(name) {
        setTasks([...tasks, {id: "todo-" + nanoid(), name: name, done: false}]);
    }

    function editTaskName(id, name) {
        const newTasks = tasks.map(task => task.id === id ? {...task, name: name} : task);
        setTasks(newTasks);
    }

    const filterList = filters.map(filter => {
        return (
            <FilterButton
                key = {filter.id}
                name={filter.name}
                pressed={filter.name === activatedFilter.name}
                activateHandler={activateFilter}
            />)
    })

    function activateFilter(name) {
        const activated = filters.find(filter => filter.name === name);
        if (activated !== undefined) {
            setActivatedFilter(activated);
        }
    }

    function completeTask(id, done) {
        const newTasks = tasks.map(task => task.id === id ? {...task, done: done} : task);
        setTasks(newTasks)
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    const revealedTasks = tasks.filter(activatedFilter.checkReveal);

    return (
        <div className="todoapp stack-large">
            <h1>ecsimsw todo</h1>
            <TaskAddition submitHandler={handleTaskSubmitEvent}/>
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 id="list-heading">
                {revealedTasks.length} tasks remaining
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {
                    revealedTasks.map(task => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            done={task.done}
                            editName={editTaskName}
                            completeTask={completeTask}
                            delete={deleteTask}
                            key={task.id}
                        />)
                    )
                }
            </ul>
        </div>
    );
}

export default App;
