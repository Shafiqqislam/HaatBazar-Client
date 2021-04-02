import Header from '../Header/Header';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import loadingImg from '../../icons/spinner-sm.gif';
import './Home.css';


const Home = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://ancient-tundra-25519.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
          setProducts(data)
          setLoading(false);
        })
    },[])
    return (
        <div className='banner'>
            <Header></Header>
          {
            loading ? <img  style={{height:'60px'}} src={loadingImg} alt=""/>:
            products.map(product => <Products product={product}></Products> )  
          }
         
        </div>
    );
};

export default Home;