//import { Counter } from "./components/Counter";
//import { FetchData } from "./components/FetchData";
//import { Home } from "./components/Home";
//import TaskList from "./components/TaskList";
//import TaskForm from "./components/TaskForm";

//const AppRoutes = [
//    {
//        index: true,
//        element: <Home />
//    },
//    {
//        path: '/counter',
//        element: <Counter />
//    },
//    {
//        path: '/fetch-data',
//        element: <FetchData />
//    }

//export default AppRoutes;
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
//import Counter from './components/Counter';
//import FetchData from './components/FetchData';
import TaskListPage from './components/TaskListPage';

const AppRoutes = [
    {
        index: true,
        element: <TaskListPage />,
    },    
    {
        path: '/tasks',
        element: <TaskListPage />,
    },
];

export default AppRoutes;

