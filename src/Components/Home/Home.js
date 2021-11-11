import React from 'react';
import Banner from '../Banner/Banner';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import googleMap from '../../images/googleMap.PNG'
import foodDelivery from '../../images/food delivery.jfif'
import freshFood from '../../images/freshfood.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Banner></Banner>
            <OurServices></OurServices>
            <h4 className="text-center text-primary">Our Specail Services</h4>
            <div className="row w-75 mx-auto">
                
                <div className="col-12 col-md-6 col-lg-6">
                    <img style={{
                        height: '500px',
                        width: '100%'
                    }} src={foodDelivery} alt=""></img>
                </div>
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                    <h3>We provide home delivery at free cost. </h3>
                    <h4> SO Hurry Up!!! </h4>
                    <button className="btn btn-success"> Order Now</button>
                </div>

            </div>

            <div className="row w-75 mx-auto">
            
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                    <h3>Fresh Food is our gurantee </h3>
                    <h4> Eat fresh food, stay healthy!!! </h4>
                    <button className="btn btn-success"> Order Now</button>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <img style={{
                        height: '500px',
                        width: '100%'
                    }} src={freshFood} alt=""></img>
                </div>

            </div>

            <div className="w-75 mx-auto">
            <h4 style={{color:'red'}}className="text-center text-danger mt-3">Our address</h4>
            <img className="w-100" src={googleMap} alt=""/>
            </div>
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Home;