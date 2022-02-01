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

    function handleTaskSubmitEvent(name) {
        setTasks([...tasks, {id: "todo-" + nanoid(), name: name, done: false}]);
    }

    function editTaskName(id, name) {
        const newTasks = tasks.map(task => task.id === id ? {...task, name: name} : task);
        setTasks(newTasks);
    }

    const filters = [
        {name: "All", isReveal: () => true},
        {name: "Active", isReveal: task => !task.done},
        {name: "Completed", isReveal: task => task.done}
    ];

    const [activatedFilter, setActivatedFilter] = useState(filters[0])

    const taskList = tasks.filter(activatedFilter.isReveal).map(task => {
        console.log(task.name + " " + task.done)
        return (
            <Todo
                id={task.id}
                name={task.name}
                done={task.done}
                editName={editTaskName}
                completeTask = {completeTask}
            />);
    });

    function activateFilter(name) {
        const activated = filters.find(filter => filter.name === name);
        if (activated !== undefined) {
            setActivatedFilter(activated);
        }
    }

    function completeTask(id, done) {
        console.log(done)
        const newTasks = tasks.map(task => task.id === id ? {... task, done:done} : task);
        setTasks(newTasks)
    }

    // function completeTask(id) {
    //     const updatedTasks = tasks.map(task => {
    //         // if this task has the same ID as the edited task
    //         if (id === task.id) {
    //             // use object spread to make a new object
    //             // whose `completed` prop has been inverted
    //             return {...task, completed: !task.completed}
    //         }
    //         return task;
    //     });
    //     setTasks(updatedTasks);
    // }

    return (
        <div className="todoapp stack-large">
            <h1>ecsimsw todo</h1>
            <TaskAddition submitHandler={handleTaskSubmitEvent}/>
            <div className="filters btn-group stack-exception">
                {
                    filters.map(filter => {
                        return (
                            <FilterButton
                                name={filter.name}
                                pressed={filter.name === activatedFilter.name}
                                activateHandler={activateFilter}
                            />)
                    })
                }
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
