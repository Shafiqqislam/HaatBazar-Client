import React, { useEffect, useState } from 'react';
import grid from '../../icons/grid 1.png';
import add from '../../icons/plus 1.png';
import edit from '../../icons/edit 1.png';
import './Admin.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Header from '../Header/Header';


const Admin = () => {
   
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price:data.price,
            weight:data.weight,
            imageURL: imageURL
       
        };
        const url = `https://ancient-tundra-25519.herokuapp.com/addProduct`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'fe4f0a54c94630bdf74bd24a4d996c7a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="">
            <Header></Header>
            <div className="row">
                <div className="left-part">
                    <div className="control-option">
                        <h1> Haat Bazar</h1>
                        <p><img style={{height:'30px'}} src={grid} alt="" /> <Link to="/manage">Manage Product</Link> </p>
                        <p> <img style={{height:'30px'}} src={add} alt="" /> <Link to="/admin">Add Product</Link> </p>
                        <p> <img style={{height:'30px'}} src={edit} alt="" /> <Link to="/admin">Edit Product</Link></p>
                    </div>
                </div>
                <div className="right-part">
                    <div className="add-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <form action="/addProduct" method="POST"> */}
                            <h1>Add Product</h1>
                           Product Name: <input name="name" type="text" placeholder="Enter Name" ref={register} />
                            <br />
                           Wight: <input type="text" name="weight" placeholder="Enter Name" ref={register} />
                            <br />
                           Price: <input type="text" name="price" placeholder="Enter Name" ref={register} />
                            <br />
                           Add Photo: <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Admin;