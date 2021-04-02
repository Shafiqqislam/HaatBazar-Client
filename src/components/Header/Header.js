import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import profile from '../../icons/Avatar face.png';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

return (
   <div className="">
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand " href="#">HaatBazar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <Link to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/deals">Deals</Link>
                    </li>
                    <li class="nav-item"> 
                        <Link to="/login" type="button" class="detail-button btn btn-primary">Login</Link>
                        <p>{loggedInUser.name}</p>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
   </div>
);
};
       

export default Header;