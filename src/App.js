import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Manage from "./components/Manage/Manage";

export const UserContext=createContext();
function App() {
 const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">
        <Login></Login>
       </Route>
       <PrivateRoute path="/orders">
       <Orders></Orders>
       </PrivateRoute>
       <Route path="/manage">
      <Manage></Manage>
       </Route>
       <PrivateRoute path="/admin">
        <Admin/>
       </PrivateRoute>
       <PrivateRoute path="/checkout/:productId">
       <CheckOut></CheckOut>
       </PrivateRoute>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="*">
       <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
