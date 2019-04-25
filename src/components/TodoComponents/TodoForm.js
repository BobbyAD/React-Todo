import React from 'react';

const TodoForm = props => {
    return (
        <div className="todo-form">
        {/* I need to pass in my functions here */}
            <form>
                <input
                    placeholder="Task Description"
                    type="text"
                    onChange={props.handleDescriptionChange}
                    value={props.desc}
                    name="description"
                />
                <button onClick={props.addTodo}>Add Todo</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;