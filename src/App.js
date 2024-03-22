import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SignupForm from './components/SignupForm';
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage/>} />
        <Route path="/signup" exact element={<SignupPage/>} />
        <Route path="/signup/email-phone" exact element={<SignupForm/>} />
        {/* Add route for forgot password */}
      </Routes>
    </Router>
  );
}

export default App;
