import React, { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider(props) {
	const [user, setUser] = useState(null);

	const getUserDetails = () => {
		let data = localStorage.getItem('user');
		data = JSON.parse(data);

		setUser(data);
	};

	const data = { getUserDetails, user };
	return (
		<AppContext.Provider value={data}>{props.children}</AppContext.Provider>
	);
}

export default AppProvider;
