import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import Popup from './Popup';
import SearchBar from './Screens/SearchBar';
import './index.css';
import ReactDOM from 'react-dom/client';



const container = document.getElementById('app-container');
const root = createRoot(container);
root.render(
    <Router>
        <Popup />
    </Router>
);
