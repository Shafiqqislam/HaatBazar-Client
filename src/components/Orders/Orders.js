import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Orders.css';

const Orders = () => {
   
    const [bookings, setBookings] = useState({});
    console.log(bookings)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://ancient-tundra-25519.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
 
    return (
      <div className="banner">
          <Header></Header>
            <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="cart">
                        <h4>My Cart</h4>
                        <img style={{height:'300px'}} src={bookings.products?.imageURL} alt="img" />
                        <h3>Email:{bookings.email}</h3>
                        <h3>Date:{(new Date(bookings.orderDate).toDateString('dd/MM/yyyy'))}</h3>
                        <h3>Product Name:{bookings.products?.name}</h3>
                        <h3>Price :${bookings.products?.price}</h3>

                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Orders;