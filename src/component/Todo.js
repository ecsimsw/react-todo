import React, {useState} from "react";

const Todo = (props) => {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    const startEditing = () => {
        setEditing(true);
    }



    function handleEditSubmitEvent(e) {
        e.preventDefault();
        props.editName(props.id, newName);
        setEditing(false);
        setNewName("");
    }

    function handleTaskComplete() {
        props.completeTask(props.id, !props.done);
    }

    function handleEditCancel(e) {
        e.preventDefault();
        setNewName("");
        setEditing(false);
    }

    function handleDelete(e) {
        e.preventDefault();
        props.delete(props.id);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleEditSubmitEvent}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id}
                       className="todo-text"
                       type="text"
                       onChange={ ({target}) => { setNewName(target.value);}}
                />
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={handleEditCancel}
                >
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>

                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );


    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    checked={props.done}
                    onChange={handleTaskComplete}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name} / {props.done ? "true" : "false"}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={startEditing}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>

                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={handleDelete}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return isEditing ? editingTemplate : viewTemplate;
}

export default Todo;
