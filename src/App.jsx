import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChatAi from './pages/ChatAi';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/chat" element={<ChatAi />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
