import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { client } from '../client';
import jwt_decode from 'jwt-decode';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
	const navigate = useNavigate();
	const onSuccess = (response) => {
		const decoded = jwt_decode(response.credential);
		console.log(decoded);
		const { name, picture, sub } = decoded;
		localStorage.setItem('user', JSON.stringify({ name, picture, sub }));

		const doc = {
			_id: sub,
			_type: 'user',
			userName: name,
			image: picture,
			// dataset: 'production',
		};

		client.createIfNotExists(doc).then(() => {
			navigate('/', { replace: true });
		});
	};

	return (
		<div className="flex justify-start item-center flex-col h-screen">
			<div className="relative w-full h-full">
				<video
					src={shareVideo}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
					className="w-full h-full object-cover"
				/>
				<div className="absolute flex flex-col justify-center items-center  top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
					<div className="p-5">
						<img src={logo} width="130px" alt="logo" />
					</div>
					<div className="shadow-2x1">
						<GoogleOAuthProvider
							clientId={import.meta.env.VITE_GOOGLE_LOGIN_API_TOKEN}
						>
							<GoogleLogin
								onSuccess={onSuccess}
								onError={() => console.log('Error')}
								useOneTap
							/>
						</GoogleOAuthProvider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
