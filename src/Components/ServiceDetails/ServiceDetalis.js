import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from 'axios';
import './ServiceDetalis.css'


const ServiceDetalis = ({children}) => {

  const {user} = useAuth();


    const {service_id} = useParams();
    console.log(service_id);
    

    const [service, setService] = useState([]);
    useEffect( () =>{
        fetch(`http://localhost:5000/foods/${service_id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);


    const {name, description, price, img} = service || {};

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {

      data.email = user.email;
      data.foodId = service_id;
      data.foodName = name;
      data.foodPrice = price;
      data.foodImg = img; 
      data.status = "pending";

        console.log(data);
        axios.post(`https://quiet-reaches-58760.herokuapp.com/orders`, data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Successful');
                reset();
            }
        })
    }

    
    return (
        <div>
            <Header></Header>
            
            <h3 className="text-center">Your Ordered Items</h3>
              <div className="card mb-3">
                <div className="row w-75 mx-auto g-0">
                  <div className="col-12 col-md-4 col-lg-4">
                    <img src={img} style={{
                        width: '100%',
                        height: '300px'
                    }} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-12 col-md-8 col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p style={{
                          fontSize: '16px'
                      }} className="card-text">{description}</p>

                      <p style={{
                          fontSize: '16px'
                      }} className="card-text">Price: {price}</p>
            
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-food">

                <h4 className= "text-center">Fill the form To Order</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("userName", { required: true, maxLength: 20 })} placeholder="Name"/>
                    <input type="number" {...register("quantity")} placeholder="Quantity"/>
                    <input {...register("address" )} placeholder="Address"/>
                    <input {...register("mobileNo" )} placeholder="Mobile No"/>
                    <input type="date" {...register("orderDate" )} placeholder="Order Date"/>
                    <input type="Submit" style={{
                      color: 'red',
                      margin: 'auto'
                    }} />
                </form>
            </div>
            
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default ServiceDetalis;