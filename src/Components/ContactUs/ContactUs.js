import React from 'react';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import googleMap from '../../images/googleMap.PNG'
const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-75 mx-auto mb-5 p-5">

                <h2 className="text-center text-success">Our Address: Ramnagar, Dinajpur Sadar, Dinajpur</h2>
                <h3 className="text-center text-danger">Contact Number: 01723984697</h3>
                <img src={googleMap} className="w-100" alt="..."/>
            </div>

            <h3 className="text-center text-danger mb-3">Complain Box</h3>

            <form style={{
                backgroundColor: 'cadetblue',

                padding: '10px'
            }} className="row g-3 w-50 mx-auto mb-2">
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" size="40"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" size="40"/>
            </div>

            <div className="col-12">
                <label htmlFor="w3review">Any Complain</label>
                <br/>
                <textarea id="w3review" name="w3review" rows="4" cols="30"/>
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Give Complains</button>
            </div>
            </form>

            {/* <form style={{
                backgroundColor: '#c2ebf0'
            }}className="w-50 mx-auto">
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Mobile No</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            <div className="row mb-3">
            <label for="w3review">Any Complain</label>
            <br/>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
            
            </textarea>

            </div>
            
            <button type="submit" className="btn btn-primary">Message Us</button>
            </form> */}
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default ContactUs;