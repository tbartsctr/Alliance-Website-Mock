import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductShopPage from './ProductShopPage';
import CreateAccountPage from "./CreateAccountPage";
import HomePage from "./HomePage";
import './App.css';
import Layout from './Layout';
import AboutPage from "./AboutPage"
import ImmuneHealth from "./ImmuneHealth";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ProductShopPage />} />
          <Route path="/create-account" element={<CreateAccountPage/>} />
          <Route path="/about-us" element={<AboutPage/>} />
          <Route path="/immune-health" element={<ImmuneHealth/>} />
        </Routes>
      </Layout>
    </Router>
  );
  

}

export default App
