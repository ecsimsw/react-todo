import './App.css';
import Todo from './component/Todo'
import FilterButton from './component/FilterButton'

function App() {
    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
            <div className="filters btn-group stack-exception">
                <FilterButton name = "all" pressed = {true}/>
                <FilterButton name = "Active" pressed = {false}/>
                <FilterButton name = "Completed" pressed = {false}/>
            </div>
            <h2 id="list-heading">
                3 tasks remaining
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                <Todo id="todo-0" name="Eat" done={true}/>
                <Todo id="todo-1" name="Read" done={false}/>
                <Todo id="todo-2" name="Hack" done={true}/>
            </ul>
        </div>
    );
}

export default App;
