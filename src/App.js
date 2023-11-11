import { RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Login from './pages/Login';
import First from './pages/First';
import router from './Router';
import './App.css';

function App() {

	return (
		<>
			<Header />




			<div className="">
				<RouterProvider router={router} />
			</div>


			{/* <section>
				<Login />
			</section> */}



			{/* <section>
				<First />
			</section> */}


		</>

	);
}

export default App;