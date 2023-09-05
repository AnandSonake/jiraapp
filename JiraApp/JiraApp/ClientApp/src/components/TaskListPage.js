import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskListPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
        const defaultTasks = [
            {
                taskName: 'Sample Task 1',
                taskDescription: 'This is a sample task description.',
                deadline: '2023-09-01',
            },
            {
                taskName: 'Sample Task 2',
                taskDescription: 'Another sample task description.',
                deadline: '2023-09-15',
            },
        ];
        setTasks(defaultTasks);
    }, []);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task, index) => index !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Task Management App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <div className="horizontal-space"></div>
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default TaskListPage;

