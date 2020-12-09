import React, {useState} from 'react';
import './header.css';
import '../../style/style2.css';
import {Link} from "react-router-dom";
import {logOut} from '../../store/actions/authActions'
import { connect } from 'react-redux'
function Header(props) {
	const {isAuth} = props.authReducer
    var authMode = {};
	var nauthMode = {};
	
if(isAuth){
	authMode.display = 'none';
	
  }
  if(!isAuth){
	nauthMode.display = 'none';
	
  }

    return (
		<header>
		<nav className="navbar navbar-expand-md">
		   <a className="navbar-brand" id="cloth" >Cloth Shop</a>
		   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			   <span className="navbar-toggler-icon"></span>
		   </button>
		   <div className="collapse navbar-collapse  d-flex justify-content-end" id="collapsibleNavbar">
			   <ul className="navbar-nav">
			   <li className="nav-item"> <Link to='/' class="nav-link" >Home</Link></li>
			   <li className="nav-item"><Link to='/new' class="nav-link">Add new</Link></li>
			   <li className="nav-item"><a class="nav-link">Cart</a></li>  
			   <div style={authMode}>
				<li className="nav-item active" ><Link to='/login' class="nav-link"   id="active" >Login</Link> </li>
				</div>
				<div style={nauthMode}>
				<li className="nav-item" onClick={props.logOut} >Logout </li>
				</div>
			   
			   </ul>
		   </div>  
		   </nav>
	   </header>
    );
  }
  
  const mapStateToProps = state => ({
	authReducer: state.authReducer
  })
  
  const mapDispatchToProps = {
	logOut,
  }
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Header)
  