import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import opps from '../../images/opps.jpg'

const MyOrders = () => {
    const {user} = useAuth();
   
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( () =>{
        fetch(`https://quiet-reaches-58760.herokuapp.com/myOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data))
        
    },[user, control])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure want to delete?');
        if(proceed){
            fetch(`https://quiet-reaches-58760.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                alert('Order is successfully canceled');
                setControl(!control);
                }
            });
        }
    }

    //console.log(services);
    return (
        <div>
           <Header></Header>

           <h2 className="text-center">My Orders:</h2> 
           {
               services.length > 0 ?
               <>
               <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services?.map(service => 
                        
                        <div key={service?._id} className="col">
                            
                        <div className="card">
                        <img style={{
                            height: '350px'
                        }} src={service.foodImg} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{service?.foodName}</h5>
                            <p className="card-text">{service?.foodPrice}</p>
                            <p  className="card-text bg-success fw-bold p-2"> Status: {service?.status}</p>
                            <button onClick={() => handleDelete(service?._id)} className="btn btn-danger">Cancel Order</button>
                        </div>
                        </div>
                    </div>
                        ) 
                }

                
                </div>
               </> :  <><h3 className="text-center">No Order yet!!</h3>
                    <img className="d-flex justify-content-center mx-auto" src={opps} alt=""></img></>
           }

                

           <Footer></Footer>
           <BottomPart></BottomPart>
        </div>
    );
};

export default MyOrders;