import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import StudentLogin from "./components/staffLogin.jsx";
import StudentRegister from "./components/staffRegister.jsx";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/footer.jsx";
import Rules from "./components/rules.jsx";
import Contact from "./components/contact.jsx";


function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <Router>
      <div className="app-container">
        <Header setActiveComponent={setActiveComponent} />
        {activeComponent === 'home' && (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<ProductDetail />} />

          </Routes>
        )}
        {activeComponent === 'signin' && (
          <StudentLogin setActiveComponent={setActiveComponent} />
        )}
        {activeComponent === 'signup' && (
          <StudentRegister setActiveComponent={setActiveComponent} />
        )}
        {activeComponent === 'adminin' && (
          <AdminLogin setActiveComponent={setActiveComponent} />
        )}
                {activeComponent === 'rules' && (
          <Rules setActiveComponent={setActiveComponent} />
        )}
                        {activeComponent === 'contact' && (
          <Contact setActiveComponent={setActiveComponent} />
        )}



      </div>
             <Footer />
    </Router>

  );
}

export default App;