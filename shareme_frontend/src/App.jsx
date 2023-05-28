import {
	RouterProvider,
	createBrowserRouter,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';
import { useEffect } from 'react';
import { fetchUser } from './utils/fetchUser';

// const router = createBrowserRouter([
// 	{
// 		path: 'login',
// 		element: <Login />,
// 	},
// 	{
// 		path: '/*',
// 		element: <Home />,
// 	},
// ]);

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const user = fetchUser();

		if (!user) navigate('/login');
	}, []);
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/*" element={<Home />} />
		</Routes>
		// <RouterProvider router={router} />
	);
}

export default App;
