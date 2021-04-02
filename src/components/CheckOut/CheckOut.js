import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './CheckOut.css';

const CheckOut = () => {
    const { productId } = useParams();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://ancient-tundra-25519.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId]);
    const handleBooking=()=>{
        const newBooking = {...loggedInUser, products:product, orderDate:new Date()};
        fetch('https://ancient-tundra-25519.herokuapp.com/addOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newBooking)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-md-8">
                    <h2>CheckOut</h2>

                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{product.name}-{product.weight}</td>
                            <td>{1}</td>
                            <td>${product.price}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>${product.price}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><button onClick={handleBooking} className="detail-button btn btn-primary">CheckOut</button> </td>
                        </tr>
                    </table>
                    
                </div>
            </div>
        </div>
    );
};

export default CheckOut;