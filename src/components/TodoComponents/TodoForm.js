import React from 'react';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <form onSubmit={}>
                <input
                    placeholder="Task Description"
                    value={}
                    onChange={}
                    name="description"
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;