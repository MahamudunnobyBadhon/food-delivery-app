import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import './Header.css'

const Header = () => {

  const {user, logOut} = useAuth();

  //console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
        <div className="d-flex align-items-center hospital-name">
            <Link className="navbar-brand" to="/home">
            
            <i className="fas fa-utensils pe-2"></i>
            Khuda Lagse Naki
            </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/home">Home</Link>


              {
                user.email?
                <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/myOrders">My Orders</Link> : <p></p>
              }

              {
                user.email? 
                <Link style={{
                  color: 'white'
                }} className="nav-item nav-link" to="/admin">Admin</Link> : <p></p> 
              }


              {user.email? <p></p> :
                <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/register">Register</Link>}

             { user.email?<p></p> :
              <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/login">Login</Link>}

              <span className="nav-link"style={{color: 'yellow'}}>{user?.email}</span>

              {user?.email && <button className="btn btn-danger"onClick={logOut}>Log Out</button> }

              

          </ul>

         


          
          
          <Link className="btn btn-success me-2" to="/contactus">Contact Us</Link>

         
         {user.email? <Link className="btn btn-danger"to="/profile">Profile</Link> : <p></p>}

          {user?.email ? (user?.photoURL ? <Link to="/profile">
            <img style={{
            height: '60px',
            borderRadius: '40px'
            }} src={user?.photoURL} alt="" />
          </Link> : <Link className="btn btn-danger"to="/profile">Profile</Link>): <p></p>}
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
