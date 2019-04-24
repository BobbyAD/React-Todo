import React from 'react';

const Todo = props => {
    return (
        <div className="todo-element">
            <p>
                {props.task.description}
            </p>
        </div>
    )
}

export default Todo;