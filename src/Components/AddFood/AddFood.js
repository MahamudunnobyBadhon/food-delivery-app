import React from 'react';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './AddFood.css';
import axios from 'axios';

const AddFood = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`https://quiet-reaches-58760.herokuapp.com/foods`, data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully inserted');
                reset();
            }
        })
    }
    return (
        <div>

            <h2>Add Foods Now </h2>
            

            <div className="add-food">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                    <input {...register("description" )} placeholder="Description"/>
                    <input type="number" {...register("price")} placeholder="Price"/>
                    <input {...register("img" )} placeholder="Image Link"/>
                    <input type="submit" />
                </form>
            </div>
            
        </div>
    );
};

export default AddFood;