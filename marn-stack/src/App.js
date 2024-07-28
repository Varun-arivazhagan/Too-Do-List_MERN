// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage';
import CreateEmployee from './CreateEmployee';
import Details from './EmployeeDetails'
import Update from './UpdateEmployee'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Employee" element={<CreateEmployee />} />
        <Route path="/EmployeeDetails" element={<Details />} />
        <Route path="/Update" element={<Update />} />

      </Routes>
    </Router>
  );
};

export default App;
