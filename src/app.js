import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Error from './Pages/Error/Error.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import AddBook from './Pages/AddBook/AddBook.jsx';


export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create" component={AddBook} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}
