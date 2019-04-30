import React from 'react';
import './Todo.scss'

const Todo = props => {
    let classNames = "todo-element";
    if (props.task.completed) {
        classNames += " completed"
    }

    const updateCompleted = () => {
        props.toggleCompleted(props.task.id);
    }

    return (
        <div className={classNames} onClick={updateCompleted}>
            <p>
                {props.task.description}
            </p>
        </div>
    )
}

export default Todo;