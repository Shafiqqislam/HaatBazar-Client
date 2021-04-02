import React, { useEffect, useState } from 'react';
import grid from '../../icons/grid 1.png';
import add from '../../icons/plus 1.png';
import edit from '../../icons/edit 1.png';
import { Link } from 'react-router-dom';
import deleteImg from '../../icons/Group 33150.png';
import Header from '../Header/Header';
import './Manage.css';
const Manage = () => {
    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        fetch('https://ancient-tundra-25519.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // const {name,price,weight,_id}=props.product;
    const deleteProduct=id=>{
       fetch(`https://ancient-tundra-25519.herokuapp.com/deleteProduct/${id}`,{
           method:'DELETE',
          
       })
       .then(res=>res.json())
       .then(res => console.log('server side response', res))
    }
    return (
        products.map(td => (
            <div>
            <ul className='manage-product'>
               
                <li><h5>{td.name}</h5></li>
                <li><h5>{td.weight}</h5></li>
                <li><h5>{td.price}</h5></li>
                <li><h5><button class="detail-button btn btn-primary" onClick={()=>deleteProduct(td._id)}><img style={{height:'30px'}} src={deleteImg} alt=""/></button></h5></li>

            </ul>
</div>
            )))
        }
        


export default Manage;