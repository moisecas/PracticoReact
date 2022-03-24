import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Layout from '../containers/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import PasswordRecovery from '../pages/PasswordRecovery.jsx';
import SendEmail from '../pages/SendEmail.jsx';
import NewPassword from '../pages/NewPassword.jsx';
import MyAccount from '../pages/MyAccount.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders.jsx';
import NotFound from '../pages/NotFound.jsx'; 
import '../styles/global.css'; //solicitamos los estilos 

const App = () => {
	return (
	  <BrowserRouter>
		<Layout>
		  <Routes>
			<Route exact path="/" element={<Home />} />
					  <Route exact path="/login" element={<Login />} />
					  <Route exact path="/PasswordRecovery" element={<PasswordRecovery />} />
					  <Route exact path="/send-email" element={<SendEmail />} /> 
					  <Route exact path="/new-password" element={<NewPassword />} />
					  <Route exact path="/account" element={<MyAccount />} />
					  <Route exact path="/signup" element={<CreateAccount />} />
					  <Route exact path="/checkout" element={<Checkout />} />
					  <Route exact path="/orders" element={<Orders />} />
					  <Route path="*" element={<NotFound />} />
		  </Routes>
		</Layout>
	  </BrowserRouter> 
	)
  }


export default App; 