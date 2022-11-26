import './App.css';
import React from 'react';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProductsPage favorites={1} />} />
				<Route path="/products" element={<ProductsPage favorites={1} />} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route path="/products/favorites" element={<ProductsPage favorites={0} />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;