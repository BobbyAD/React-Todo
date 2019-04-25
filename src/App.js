import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const defaultTasks = [
    {
        description: 'Example Task',
        id: 0,
        completed: false
    },
    {
        description: 'Example Task2',
        id: 1,
        completed: false
    }
];

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            tasksOnState: defaultTasks,
            task: {
                description: '',
                id: '',
                completed: false
            }
        }
    }

    handleChanges = event => {
        this.setState({
            task: {
                ...this.state.task,
                [event.target.name]: event.target.value
            }
        });
    }

    addTask = event => {
        event.preventDefault();
        console.log(this.state.tasksOnState);
        const newTask = {
            description: this.state.task.description,
            id: Date.now(),
            completed: false
        }
        this.setState({
            tasksOnState: [...this.state.tasksOnState, newTask],
            task: {
                description: '',
                id: '',
                completed: false
            }
        })
    }

    toggleComplete = id => {
        this.setState({
            tasksOnState: this.state.tasksOnState.map(element =>
                    element.id === id ? { ...element, completed: !element.completed } : element
                )
        })
    }

    clearCompleted = event => {
        event.preventDefault();
        this.setState({
            tasksOnState: this.state.tasksOnState.filter(element => 
                    element.completed === true ? false : element
                )
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoList 
                    tasks={this.state.tasksOnState} 
                    toggleCompleted={this.toggleComplete}
                />
                <TodoForm 
                    addDescription = {this.addTask}
                    handleDescriptionChange = {this.handleChanges}
                    addTodo = {this.addTask}
                    desc = {this.state.task.description}
                    clearCompleted = {this.clearCompleted}
                />
            </div>
        );
    }
}

export default App;
