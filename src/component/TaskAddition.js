import React,{useState} from "react";

export default function TaskAddition(props) {

    const [newTaskName, setNewTaskName] = useState("");

    function addTask(e) {
        e.preventDefault();
        props.submitHandler(newTaskName);
        setNewTaskName("");
    }

    return (
        <form onSubmit={addTask}>
            <input
                type="text"
                value={newTaskName}
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                onChange={(e) => {
                    e.preventDefault();
                    setNewTaskName(e.target.value);
                }}
            />
            <button
                type="submit"
                className="btn btn__primary btn__lg"
            >
                Add
            </button>
        </form>
    );
}
