import React from 'react';

const defaultTasks = [
    {
        task: 'Example Task',
        id: 0,
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
                id: 0,
                completed: false
            }
        }
    }

    handleChanges = event => {
        this.setState({
            task: {
                ...this.state.task,
                [event.target.description]: event.target.value
            }
        })
    }

    addTask = event => {
        event.preventDefault();
        this.setState({
            tasksOnState: [...this.state.tasksOnState, this.state.task]
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>

                {/* <div className="task-list">
                    {this.state.tasksOnState.map(task => (
                        
                    ))}
                </div> */}
            </div>
        );
    }
}

export default App;
