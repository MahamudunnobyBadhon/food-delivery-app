import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
    const {_id, name, img, price, description} = props.service;
    return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 home-service" style={{
                
            }}>
                <div className="card ">
                    <img style={{
                              height: '200px'
                    }} src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold" style={{color: '#0e19ed'}}>{name}</h5>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Price :</span> {price}</p>        

                        <p className="card-text text-sm">{description}</p>                                   
                    </div>
                    <Link type="submit" className="btn btn-primary w-50 mx-auto mb-2" to={`/servicedetails/${_id}`}>
                    <i className="fas fa-shopping-basket"></i>Order Now
                    </Link>
                </div>
            </div>
    );
};

export default Service;