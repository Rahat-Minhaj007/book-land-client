import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LogIn from './components/LogIn/LogIn';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import AddBook from './components/AddBook/AddBook';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




export const UserContext = createContext();


function App() {

  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <PrivateRoute path="/addBook">
          <AddBook></AddBook>
        </PrivateRoute>
        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/checkOut/:_id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="*">
         <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
