import React, { createContext, useReducer} from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Error from './Pages/Error/Error.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import AddBook from './Pages/AddBook/AddBook.jsx';
import Review from './Pages/Review/Review.jsx';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar/Navbar.jsx';
import { initialState, reducer} from "./Components/reducer/UseReducer";


  // context API
  export const UserContext = createContext();
const Routing = () => {
    return(
    <div>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/create" component={AddBook} />
    <Route path="/logout" component={Logout} />
    <Route path="/review" component={Review} />
    <Route component={Error} />
    </Switch>
    </div>

    )
}


export default function App() {
    const [state, dispatch] = useReducer(reducer,initialState)
     
    return (
         
        <UserContext.Provider value={{state, dispatch}}>

       
         <Routing/>  
       
        </UserContext.Provider>
    )
    }


