import React from 'react';
import './product.css';
import '../../style/style2.css';
import {Link} from "react-router-dom";

function Product(props) {
  const id = props.product.id
    return (
     <div className='col-3 col-s-3 '>
       <div className='item'>
        <img className='photo' src={props.product.image || 'images/1.jpg'} alt='product photo'/>
    <Link className='name' to={{pathname:"/product/", id:{id} }}>{props.product.title}</Link>
        <p className='price'>{props.product.price} KZT</p>
       </div> 
	 </div>
    );
  }
  
  export default Product;
  