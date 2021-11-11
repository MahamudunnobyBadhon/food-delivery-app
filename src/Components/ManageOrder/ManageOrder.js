import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const ManageOrder = () => {

    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);
    
    useEffect( () =>{
        fetch('https://quiet-reaches-58760.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setServices(data));
    },[control]);



     const updateStatus = id =>{
        const status = 'approved';
        console.log(id);
        fetch(`https://quiet-reaches-58760.herokuapp.com/updateStatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('update successfully');
                setControl(!control);
            }
        })
     }

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

    return (
        <div>
            <h2>Manage Order now</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Food Name</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Mobile No</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                {
                    services.map(service => 
                    <tr key={service._id}>
                        <td>{service.userName}</td>
                        <td>{service.foodName}</td>
                        <td>{service.quantity}</td>
                        <td>{service.address}</td>
                        <td>{service.mobileNo}</td>
                        <td>{service.status}</td>
                        <td><button onClick={() => handleDelete(service._id)} className="btn btn-danger bg-danger">Delete</button></td>
                        <td><button onClick={() => updateStatus(service._id)} className="btn btn-success bg-success">Approve</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;