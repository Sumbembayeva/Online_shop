import React from 'react';
import './category.css';
import '../../style/style2.css';
import Product from '../product';
import {Link} from "react-router-dom";


function Category(props) {
  const productList = props.products.map(item =>(
    <Product product={item}/>
 ))
    return (
     <div className='Category container'>
       <h5>{props.category.name}</h5>
       <hr />
          <div className='row'>
          {productList}
          
          </div>
	 </div>
    );
  }
  
  export default Category;
  