import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
	return (
		<div className="signup">
			<h3>Create an account</h3>
			<form action="">
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />
				<button type="submit">Continue</button>
			</form>
			<p className='text'>
				Already have an account? <Link to="/login">Login</Link>
			</p>
			<p className='other'>
				<span></span>
				OR
				<span></span>
			</p>
			<button className="secondary-button">
				<img src="/google.png" alt="" />
				<span>Continue with Google</span>
			</button>
			<button className="secondary-button">
				<img src="/microsoft.png" alt="" />
				<span>Continue with Microsoft</span>
			</button>
			<button className="secondary-button">
				<img src="/apple.png" alt="" />
				<span>Continue with Apple</span>
			</button>
		</div>
	);
}

export default SignUp;
