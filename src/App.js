import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import ServiceDetalis from './Components/ServiceDetails/ServiceDetalis';
import Register from './Components/Register/Register';
import Login from './Components/LogIn/Login';
import AuthProvider from './context/AuthProvider';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';

import ContactUs from './Components/ContactUs/ContactUs';
import NoPage from './Components/NoPage/NoPage';
import AddFood from './Components/AddFood/AddFood';

import MyOrders from './Components/MyOrders/MyOrders';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/addfood">
              <AddFood></AddFood>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>

            <PrivateRoute exact path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute exact path="/servicedetails/:service_id">
              <ServiceDetalis></ServiceDetalis>
            </PrivateRoute>

            <Route exact path="*">
              <NoPage></NoPage>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
