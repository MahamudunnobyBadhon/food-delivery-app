import React from 'react';

import './Banner.css'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpeg'
import banner3 from '../../images/banner3.jpg'
const Banner = () => {
    return (


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img style={{height: '100vh'}}src={banner1} className=" img-fluid d-block w-100 first-image" alt="..."/>
                </div>
                <div className="carousel-item">
                <img style={{height: '100vh'}} src={banner2} className="img-fluid d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img style={{height: '100vh'}} src={banner3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    );
};

export default Banner;