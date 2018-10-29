import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (

		<div>

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    		<span className="navbar-brand">Sign Up</span>
			<span className="text-white">
			{/* <h1>SIGN UP</h1> */}
			
			<form>
				<label>Email</label>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				
				<label>Password</label>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
			
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form>
			</span>
			<Link to = "/" >Go Back To Sign In</Link>
  			</nav>
			{/* <img src={require("../imageTwo.jpeg")} /> */}
			<div className="title">
			<h1 className="one">Event Assistant</h1><br></br><br></br>
			<h2 className="two">Plan Your Best Event Ever!</h2>
			</div>
		</div>
	);
};

export default SignUp;