
import React, { useState } from 'react';
import './TaskForm.css'; 

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            taskName,
            taskDescription,
            deadline
        };
        onAddTask(newTask);
        setTaskName('');
        setTaskDescription('');
        setDeadline('');
    };

    return (
        <div className="task-form">
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Task Name:</label>
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Task Description:</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Deadline:</label>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;




