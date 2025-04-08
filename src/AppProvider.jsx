import React, { createContext } from 'react';

export const AppContext = createContext();

function AppProvider(props) {
	const data = {};
	return (
		<AppContext.Provider value={data}>{props.children}</AppContext.Provider>
	);
}

export default AppProvider;
