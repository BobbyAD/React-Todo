// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

// class TodoList extends React.Component {
//     constructor () {
//         super();
//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div className="task-list">
//                     {this.state.studentsOnState.map(task => (
//                         <Todo task={task} />
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }

const TodoList = props => {
    return (
        <div className = "task-list">
            {props.tasks.map(element => (
                <Todo task={element} key={element.id} />
            ))}
        </div>
    )
}

export default TodoList;