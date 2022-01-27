import './App.css';
import Todo from './components/Todo'
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function addTask(name) {
    alert(name);
}


function App(props) {
    const taskList = props.tasks.map(task => (
        <Todo id={task.id} name={task.name} done={task.completed} key={task.id}/>
    ));

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
                3 tasks remaining
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
