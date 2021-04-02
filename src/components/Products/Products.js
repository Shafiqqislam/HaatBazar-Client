import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Products = (props) => {
    const {imageURL,name,price,weight,_id}=props.product;
    const history = useHistory([]);
    const handleClick=(productId)=>{
      history.push(`/checkout/${productId}`)
  }
    return (
        <div className="col-md-3 events">
           <div className="items">   
            <img src={imageURL} alt=""/>
            <div className="name-weight">
              <h5>{name}-</h5>
              <h5>{weight}</h5>
            </div>
            <div className="price-btn">
               <h5>${price}</h5>
               <button className="detail-button btn btn-primary ml-auto"onClick={()=>handleClick(_id)}>Buy Now<FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>
           </div>
        </div>
    );
};

export default Products;