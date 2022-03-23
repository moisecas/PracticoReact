import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Layout from '../containers/Layout.jsx';
import Login from '../containers/Login.jsx'; 
import RecoveryPassword from '../containers/RecoveryPassword.jsx'
import Home from '../pages/Home.jsx'; 
import NotFound from '../pages/NotFound.jsx';
import '../styles/global.css'; //solicitamos los estilos 

const App = () => {
	return (

		<BrowserRouter>

			<Layout>

			<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/login" element={<Login />} />			
			<Route exact path="/recovery-password" element={<RecoveryPassword />} />
			<Route path="*" element={<NotFound />} />
			</Routes>
			</Layout>
		</BrowserRouter> 
	
	);
}


export default App; 