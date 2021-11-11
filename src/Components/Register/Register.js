import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';

const Register = () => {

    const {signUpUsingEmailAndPassword, error} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInput = (e) =>{
        setEmail(e.target.value);
    }

    const passInput = (e) =>{
        setPassword(e.target.value);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        console.log(email, password);
        signUpUsingEmailAndPassword(email, password);
    }


    return (
        <div>
            <Header></Header>
            <h2 className="text-center">Create Account</h2>

            <form className= "w-50 mx-auto mt-1 mb-3 register-form"onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label style={{
                    fontWeight: 'bold'
                }}  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label style={{
                    fontWeight: 'bold'
                }}  htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={passInput}type="password" className="form-control" id="exampleInputPassword1" required/>
            </div>
            {error?.message? <p></p>: <p style={{color:  'red'}}>{error}</p>}
            <button type="submit" className="btn btn-regular btn-primary w-100">Submit</button>
            <p style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}} className="text-center">Already Have an account???</p>
            <Link to='/login' className="btn btn-success w-100">LogIn</Link>

            
            </form>

            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Register;