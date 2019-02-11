import React from 'react'
import App from './App'
import Welcome from './Welcome'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


const GameRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/bridalPartyShowdown" component={App}/>
        </div>
    </Router>
)

export default GameRouter
