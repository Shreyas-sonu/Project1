import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./auth/Login";
import Header from "./components/header/Header";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import "./Global.css";
import Home from "./components/Home";
import Register from './auth/register/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
