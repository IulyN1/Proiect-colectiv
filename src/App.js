import './App.css';
import React from 'react';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:id" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
