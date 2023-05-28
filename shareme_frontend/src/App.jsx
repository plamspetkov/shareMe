import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';

const router = createBrowserRouter([
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: '/*',
		element: <Home />,
	},
]);

function App() {
	return (
		// router
		// <Routes>
		// 	<Route path="login" element={<Login />} />
		// 	<Route path="/*" element={<Home />} />
		// </Routes>
		<RouterProvider router={router} />
	);
}

export default App;
