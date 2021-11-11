import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="row gx-4">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div>
                        
                        
                        <h5><i className="fas fa-utensils pe-2"></i> Khuda Lagse Naki</h5>
                    

                        <p>We have the best food order services. We deliver fresh food. your health is our concern. So, be free to order. Open 24 hours. </p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <h5>Services</h5>
                    <ul>
                        <li>
                            Fresh Food
                        </li>
                        <li>
                            On time Order
                        </li>
                        <li>
                            24 hours active
                        </li>
                        <li>
                            Great discount
                        </li>
                        
                    </ul>

                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <h5>Useful Links</h5>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                My Orders
                            </li>
                            <li>
                                Add Foods
                            </li>
                            <li>
                                Manage Order
                            </li>
                            <li>
                                Manage Foods
                            </li>
                        </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    
                    <h5 style={{
                        
                    }}>
                            Contact Us
                    </h5>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <i className="fas fa-phone-volume"></i>
                            </td>
                            <td>
                                017*****97
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-map-marker-alt"></i>
                            </td>
                            <td>
                                Ramagar, Dinajpur
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="far fa-envelope"></i>
                            </td>
                            <td>
                                u1704035@student.cuet.ac.bd
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>    
        </div>
        
    );
};

export default Footer;