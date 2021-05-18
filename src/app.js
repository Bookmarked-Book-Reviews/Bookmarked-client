import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import About from './Pages/About/About.jsx';
import Error from './Pages/Error/Error.jsx'

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/about" component={About} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}
