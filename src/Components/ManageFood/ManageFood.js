import React, { useEffect, useState } from 'react';

const ManageFood = () => {

    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);
    
    useEffect( () =>{
        fetch('https://quiet-reaches-58760.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setServices(data));
    },[control]);


    const handleDelete = id =>{

        const proceed = window.confirm('are you sure want to delete?');
        if(proceed){
            fetch(`https://quiet-reaches-58760.herokuapp.com/deleteFood/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                alert('Food is successfully deleted');
                setControl(!control);
                }
            });
        }
    }
    console.log(services);
    return (
        <div>
            <h2>Manage Foods</h2>
            <div className="row ps-2 pt-5">
            {
               services?.map(service => 
                <div key= {service._id}className="border border-2 d-flex ps-5">
                    <div className="col-3">
                        <img style={{
                            height: '100px',
                            width: '100px'
                        }}src={service.img} alt=""></img>
                    </div>
                    <div className="col-3">
                        <p>{service.name}</p>
                    </div>
                    <div className="col-3">
                        <p>{service.price}</p>
                    </div>
                    <div className="col-3">
                        <button onClick={() => handleDelete(service?._id)} className="btn btn-danger">Delete</button>
                    </div>

                </div>
                )
            }
            </div>

        </div>
    );
};

export default ManageFood;