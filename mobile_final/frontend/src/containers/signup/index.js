import React, {useEffect, useState} from 'react';
import './signup.css';
import Footer from  '../../components/footer';
import Header from  '../../components/header';
import {  Link } from "react-router-dom";
import {signUp} from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
function Signup(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: ``,
      password: ``
      })
      const handleOk = (e) => {
        e.preventDefault();
        props.signUp(formData)
        history.push("/login");
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
    <div className="Signup">
    <Header />
    <div className='row'>
			<img className='logo' src='images/login.png'/>
			<div className='col-5 form'>
      <form onSubmit={handleOk} validateMessages={validateMessages}>
        <input type='text' placeholder='UserName..' name="username" value={formData.username} onChange={handleChange}/><br />
				<input type='password' placeholder='Password..' name="password" value={formData.password} onChange={handleChange}/><br />
				<button type='submit'>Sign Up</button>
       </form> 
			</div>
		</div>
    <Footer />
    </div>
  );
}

const mapStateToProps = null

const mapDispatchToProps = {
  signUp
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
