import React from 'react';
import HomePage from './pages/Home'
import CounterPage from './pages/CounterPage'

const RouteList = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/counter',
        element: <CounterPage/>,
    }
];

export default RouteList;
