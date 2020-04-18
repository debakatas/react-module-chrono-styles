/*
    This file is the entry for the
    Webpack system to bundle all
    into a nice app :)
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './App';

// Import stylus (css) here so we have styles to be auto-reloaded
import './style/global.css';
import './style/global.styl';

// This is necessary to the app reload without refreshing the whole page
const HotApp = hot(() => <App></App>);

// Get our App.jsx and mount it all into the #debakatas div
ReactDOM.render(
    <HotApp />,
    document.getElementById('debakatas')
);
