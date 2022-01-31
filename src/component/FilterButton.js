import React from "react";

export default function FilterButton(props) {

    function activate(e) {
        e.preventDefault();
        props.activateHandler(props.name);
    }

    return (
        <button type="button" className="btn toggle-btn" aria-pressed={props.pressed} onClick={activate}>
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}
