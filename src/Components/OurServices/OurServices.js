import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const OurServices = () => {

    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://quiet-reaches-58760.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);


    return (
        <div>
            <div>
                <h4 style={{color: '#0e19ed'}} className="text-center mt-2"> Our Available Foods</h4>
            </div>
            <div className="row d-flex justify-content-center g-4 mt-1 mb-3 g-5 w-75 text-center mx-auto">
            {
               services?.map(service => <Service      
                key={service._id}
                service={service}>

               </Service>) 
            }
            </div>
        </div>
    );
};

export default OurServices;