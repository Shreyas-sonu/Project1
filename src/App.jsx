import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/login/Login";
import Header from "./components/header/Header";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import "./Global.css";
import Home from "./components/Home";
import Register from './auth/register/Register';
import Trail from './auth/Trial/Trial';
import BranchForm from './auth/register/studentInfo/BranchForm';
import PersonalInfo from './auth/register/studentInfo/PersonalInfo';
import StudentInfo from './components/studentInfo/StudentInfo';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/branch" element={<BranchForm/>}/>
        <Route path="/info-form" element={<PersonalInfo />} />
        <Route path="/info" element={<StudentInfo/>}/>
        <Route path="/trial" element={ <Trail/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
