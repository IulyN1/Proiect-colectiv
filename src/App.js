import './App.css';
import React from 'react';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProductsPage productsType={"ALL_PRODUCTS"} />} />
				<Route path="/products" element={<ProductsPage productsType={"ALL_PRODUCTS"} />} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route path="/products/favorites" element={<ProductsPage productsType={"FAVORITES"} />} />
				<Route path="/products/watchlist" element={<ProductsPage productsType={"WATCHLIST"} />} />
				<Route path="/products/cart" element={<CartPage productsType={"CART"} />}/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;