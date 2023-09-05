
import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
    const handleDelete = (taskId) => {
        onDeleteTask(taskId);
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.taskName}</h3>
                        <p>{task.taskDescription}</p>
                        <p>Deadline: {task.deadline}</p>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;




