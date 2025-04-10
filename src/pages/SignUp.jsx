import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../AppProvider';

function SignUp() {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const navigate = useNavigate();
	const context = useContext(AppContext);

	const handleSignUp = (e) => {
		e.preventDefault();

		//Ensure that password is 12 characters
		const passLength = formData.password.length;
		if (passLength < 8) {
			alert('Password should be 8 or more characters!!');
			return;
		}

		//Store user details to local Storage
		const data = JSON.stringify(formData);
		localStorage.setItem('user', data);

		context.getUserDetails();
		navigate('/chat');
	};
	return (
		<div className="signup">
			<h1>Create an account</h1>
			<form onSubmit={handleSignUp}>
				<input
					type="email"
					required
					value={formData.email}
					onChange={(e) =>
						setFormData((prev) => ({ ...prev, email: e.target.value }))
					}
					placeholder="Enter your email"
				/>
				<input
					type="password"
					value={formData.password}
					onChange={(e) => {
						setFormData((prev) => ({ ...prev, password: e.target.value }));
					}}
					placeholder="Enter your password"
				/>
				<button>Continue</button>
			</form>
			<p className="text">
				Already have an account? <Link to="/login">Login</Link>
			</p>
			<p className="other">
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
