import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterInfo } from './util/router.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={RouterObject} />
    </React.StrictMode>
);
