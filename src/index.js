import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import JeopardyRouter from './components/GameRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JeopardyRouter />, document.getElementById('root'));
registerServiceWorker();
