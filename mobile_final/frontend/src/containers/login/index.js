import React, {useEffect, useState} from 'react';
import './login.css';
import Footer from  '../../components/footer';
import Header from  '../../components/header';
import '../../style/style2.css';
import {Link} from "react-router-dom";
import {logIn} from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Login(props) {
	const history = useHistory();
	const [formData, setFormData] = useState({
	username: ``,
    password: ``
	  })
	  const handleOk = (e) => {
		e.preventDefault();
		props.logIn(formData)
		history.push("/");
	  };
	  const validateMessages = {
		required: '${label} is required!',
		types: {
		  email: '${label} is not validate email!',
		  number: '${label} is not a validate number!',
		},
		number: {
		  range: '${label} must be between ${min} and ${max}',
		},
	  };
	  const handleChange = e => {
		setFormData({...formData, [e.target.name]: e.target.value})
	  }
	 
  return (
    <div className="Login">
    <Header />
		<div className='row'>
			<img className='logo' src='images/login.png'/>
			<div className='col-5 form'>
				<form onSubmit={handleOk} validateMessages={validateMessages}>
				<input type='text' placeholder='Username..' name="username" value={formData.username} onChange={handleChange}/><br />
				<input type='password' placeholder='Password..' name="password" value={formData.password} onChange={handleChange}/><br />
				<button type='submit'>LogIn </button><br />
				<Link  className='link' to='/signup'>Do not have an account?</Link>
				</form>
			</div>
		</div>
    <Footer />
    </div>
  );
}


const mapStateToProps = null

const mapDispatchToProps = {
  logIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

